import axios from 'axios'
import qs from 'qs'
import Type from '../type'
import { CONTENT_TYPE, DEFAULT_REQUEST_OPTIONS, EMPTY_ARRAY, REQUEST_METHOD, EMPTY_OBJECT } from '../config'

const { isString, isEmptyFunction, isEmptyArray, isObject, isArray, isEmptyObject } = Type
import type { AxiosResponse, AxiosRequestConfig, AxiosInterceptorOptions, CancelToken } from 'axios'
import type { HttpClient } from '../http'
import type { ExtendAxiosRequestConfig, ExtendAxiosInstance, UserAxiosConfig, HandleMergeOptions, Params, Loading } from './types/http.type'

function getBaseUrl(base: string) {
  if (isString(base)) {
    return base
  } else {
    return ''
  }
}

function getUrl(url: string, base: string) {
  const baseUrl = getBaseUrl(base)
  return `${baseUrl}${url}`
}

export const getInstance = (interceptor?: AxiosInterceptorOptions, config?: ExtendAxiosRequestConfig) => {
  const { loading, headers, timeout, request, response, reject, retry } = {
    ...DEFAULT_REQUEST_OPTIONS,
    ...config,
  }
  const instance: ExtendAxiosInstance = axios.create({
    timeout,
  })
  for (const [key, val] of Object.entries(headers)) {
    instance.defaults.headers.common[key] = val as string
  }
  // axios默认使用encodeURI进行编码，会造成参数中带有敏感字符，所以需要使用encodeURIComponent进行编码
  instance.defaults.paramsSerializer = (params: { [s: string]: unknown } | ArrayLike<unknown>) => {
    return Object.entries(params)
      .reduce((res, [key, val]) => {
        const value: string = isObject(val) || isArray(val) ? JSON.stringify(val) : (val as string)
        res += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`
        return res
      }, '')
      .slice(0, -1)
  }
  // 加载器配置
  if (!isEmptyFunction(loading as () => void)) {
    instance.showLoading = (loading as Loading).show
    instance.hideLoading = (loading as Loading).hide
  }
  // 拦截器配置
  if (!isEmptyFunction(request)) {
    instance.interceptors.request.use(request)
  }
  if (!isEmptyFunction(response)) {
    instance.interceptors.response.use(response, reject)
  }
  // 处理重试逻辑
  if (retry > 0) {
    instance.interceptors.response.use(undefined, (err: { config: any; failure: boolean; message: string }) => {
      const config = err.config
      if (!config || !config.retry) {
        return Promise.reject(err)
      }
      config.__retryCount = config.__retryCount || 0
      if (config.__retryCount >= config.retry) {
        err.failure = true
        err.message = `已重试 ${config.retry} 次, 请求已中止。`
        return Promise.reject(err)
      }
      config.__retryCount += 1
      const backoff = new Promise(resolve => {
        setTimeout(() => {
          resolve('')
        }, config.retryDelay)
      })
      return backoff.then(() => {
        return instance(config)
      })
    })
  }
  return instance
}

export const getRequest = (instance: HttpClient, url: string, method: string, param?: Params, config?: AxiosRequestConfig) => {
  const { _param, _config } = handleParam(param, {
    ...instance.config,
    ...config,
  })
  const { loading, origin, showLoading = '', hideLoading = '' } = _config
  const options = handleOptions(instance, url, method, _param, _config)
  return new Promise((resolve, reject) => {
    loading && typeof showLoading === 'function' && showLoading()
    instance
      .http(options)
      .then((res: AxiosResponse) => {
        if (res && res.status === 200) {
          resolve(origin ? res : res.data)
        } else {
          reject(res || '')
        }
      })
      .catch(reject)
      .finally(() => loading && typeof hideLoading === 'function' && hideLoading())
  })
}

export const getMergeRequest = (instance: HttpClient, options: Array<HandleMergeOptions> = EMPTY_ARRAY) => {
  const mergeOptions = handleMergeOptions(instance, options)
  if (isEmptyArray(mergeOptions)) return Promise.resolve(EMPTY_OBJECT)
  return new Promise((resolve, reject) => {
    Promise.all(mergeOptions).then(resolve).catch(reject)
  })
}

export const handleParam = (
  param?: Params,
  config?: Params,
): {
  _param: Params
  _config: UserAxiosConfig
} => {
  let _param: Params = param || EMPTY_OBJECT
  let _config = config || EMPTY_OBJECT
  if (!config) {
    const { param = {}, ...rest } = _param
    _param = param
    _config = rest
  }
  return { _param, _config }
}

export const handleOptions = (instance: HttpClient, url: string, method: string, param: Params, config: UserAxiosConfig) => {
  const options: {
    url?: string
    params?: Params
    data?: object | string
    cancelToken?: CancelToken
    method?: string
  } = {}
  // 处理输入参数
  if (method === REQUEST_METHOD.get) {
    options.params = param
  } else {
    // 处理ContentType
    switch (config.headers && config.headers['Content-Type']) {
      case CONTENT_TYPE.encoded:
        options.data = qs.stringify(param, { arrayFormat: 'brackets' })
        break
      case CONTENT_TYPE.form:
        // eslint-disable-next-line no-case-declarations
        const formData = new FormData()
        for (const [key, val] of Object.entries(param)) {
          formData.append(key, val as string)
        }
        options.data = formData
        break
      default:
        options.data = param
        break
    }
  }
  // 处理取消请求
  config.cancel && (options.cancelToken = instance.source.token)
  return {
    url: getUrl(url, config.base ? config.base : instance.base),
    method,
    headers: {
      ...(config.headers || {}),
    },
    ...options,
  }
}

export const handleMergeOptions = (instance: HttpClient, options: Array<HandleMergeOptions>) => {
  if (isEmptyArray(options)) return []
  return options.reduce((r: Array<Promise<unknown>>, s: HandleMergeOptions) => {
    if (!isEmptyObject(s) && isString(s.url) && isObject(s.config)) {
      const { method, param, config } = s.config
      r.push(getRequest(instance, s.url, method, param, config))
      return r
    }
    return r
  }, [])
}
