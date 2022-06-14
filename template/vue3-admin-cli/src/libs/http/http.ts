import axios from 'axios'
import { querystring } from '@/utils/util'
import { isString, isEmptyFunction, isEmptyArray, isObject, isArray, isEmptyObject } from '@/utils/type'
import { CONTENT_TYPE, DEFAULT_REQUEST_OPTIONS, EMPTY_ARRAY, REQUEST_METHOD } from '@/config'

import type { AxiosResponse, AxiosRequestConfig, AxiosInterceptorOptions } from "axios"
import type { HttpClient } from "./index"
import type { ExtendAxiosRequestConfig, ExtendAxiosInstance, UserAxiosConfig, HandleMergeOptions } from "./types"

function getBaseUrl(base: string) {
    if (isString(base)) {
        return base
    } else {
        return '/'
    }
}

function getUrl(url: string, base: string) {
    const baseUrl = getBaseUrl(base);
    return `${baseUrl}${url}`
}

export const getInstance = (interceptor: AxiosInterceptorOptions, config: ExtendAxiosRequestConfig) => {
    const { loading, headers, timeout, request, response, reject, retry } = { ...DEFAULT_REQUEST_OPTIONS, ...config }
    const instance: ExtendAxiosInstance = axios.create({
        // withCredentials: true,
        timeout
    })
    for (let [key, val] of Object.entries(headers)) {
        instance.defaults.headers.common[key] = val as string
    }
    // axios默认使用encodeURI进行编码，会造成参数中带有敏感字符，所以需要使用encodeURIComponent进行编码
    instance.defaults.paramsSerializer = params => {
        return Object.entries(params).reduce((res, [key, val]) => {
            const value: string = (isObject(val) || isArray(val)) ? JSON.stringify(val) : val as string
            res += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`
            return res
        }, '').slice(0, -1)
    }
    // 加载器配置 
    if (!isEmptyFunction(loading)) {
        instance.showLoading = loading.show
        instance.hideLoading = loading.hide
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
        instance.interceptors.response.use(undefined, err => {
            const config = err.config
            // If config does not exist or the retry option is not set, reject
            if (!config || !config.retry) {
                return Promise.reject(err)
            }
            // Set the variable for keeping track of the retry count
            config.__retryCount = config.__retryCount || 0
            // Check if we've maxed out the total number of retries
            if (config.__retryCount >= config.retry) {
                // Reject with the error
                err.failure = true
                err.message = `已重试 ${config.retry} 次, 请求已中止。`
                return Promise.reject(err)
            }
            // Increase the retry count
            config.__retryCount += 1
            // Create new promise to handle exponential backoff
            const backoff = new Promise((resolve) => {
                setTimeout(() => {
                    resolve('')
                }, config.retryDelay)
            })
            // Return the promise in which recalls axios to retry the request
            return backoff.then(() => {
                return instance(config)
            })
        })
    }
    return instance
}

export const getRequest = (instance: HttpClient, url: string, method: string, param: Record<string, any>, config: AxiosRequestConfig) => {
    url = getUrl(url, instance.base)
    const { _param, _config } = handleParam(param, { ...instance.config, config })
    const { loading, origin, responseType, showLoading, hideLoading } = _config
    const options = handleOptions(instance, url, method, _param, _config)
    return new Promise((resolve, reject) => {
        loading && showLoading()
        instance.http(options).then((res: AxiosResponse) => {
            console.log(1, res)
            resolve(origin ? res : res.data)
            // if (res && res.status === 200) {
            //     // 处理文件下载
            //     if (responseType === 'blob') {
            //         const content = res.headers['content-disposition']
            //         const filename = /fileName=([\w\W]+(\.\w+));/gi.test(content.endsWith(';') ? content : content + ';') && file ? `${file}${RegExp.$2}` : RegExp.$1
            //         download(res.data, decodeURIComponent(filename))
            //         resolve({ blob: true })
            //     } else {
            //         resolve(origin ? res : res.data)
            //     }
            // } else {
            //     reject(res)
            // }
        }).catch(reject).finally(() => loading && hideLoading())
    })
}

export const getMergeRequest = (instance: HttpClient, options = EMPTY_ARRAY) => {
    const mergeOptions = handleMergeOptions(instance, options)
    if (isEmptyArray(mergeOptions)) return
    // const loading = options.some((item: { config: ExtendAxiosRequestConfig }) => item && item.config && item.config.loading)
    // const { showLoading, hideLoading } = instance
    return new Promise((resolve, reject) => {
        // loading && showLoading && showLoading()
        Promise.all(mergeOptions).then(resolve).catch(reject)
        // .finally(() => loading && hideLoading && hideLoading())
    })
}

export const handleParam = (param: Record<string, any>, config: any) => {
    let _param = param
    let _config = config
    if (!config) {
        const { param, ...rest } = _param || {}
        _param = param || {}
        _config = rest || {}
    }
    return { _param, _config }
}

export const handleOptions = (instance: HttpClient, url: string, method: string, param: Record<string, any>, config: UserAxiosConfig) => {
    const options: {
        url?: string,
        params?: any,
        data?: object,
        cancelToken?: any,
        method?: string,
    } = {}
    // 处理输入参数
    if (method === REQUEST_METHOD.get) {
        options.url = url
        options.params = param
    } else {
        if (config.query) {
            const query = querystring(url)
            if (query) {
                options.url = url.substr(0, url.indexOf('?'))
                options.params = query
            }
        }
        // 处理ContentType
        switch (config.headers['Content-Type']) {
            case CONTENT_TYPE.encoded:
                options.data = param
                break
            case CONTENT_TYPE.form:
                const formData = new FormData()
                for (let [key, val] of Object.entries(param)) {
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
    return options
}


export const handleMergeOptions = (instance: HttpClient, options: Array<HandleMergeOptions>) => {
    if (isEmptyArray(options)) return []
    return options.reduce((r: Array<Promise<any>>, s: HandleMergeOptions) => {
        if (!isEmptyObject(s) && isString(s.url) && isObject(s.config)) {
            const { method, param, config } = s.config
            r.push(getRequest(instance, s.url, method, param, config))
            return r
        }
        return r;
    }, [])
}
