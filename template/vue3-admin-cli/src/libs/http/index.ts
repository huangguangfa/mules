import axios from 'axios'
import { REQUEST_METHOD } from '@/config'
import { getInstance, getRequest, getMergeRequest } from './http'
const CancelToken = axios.CancelToken
import type { AxiosInterceptorOptions, AxiosInstance, CancelTokenSource } from 'axios'
import type { ExtendAxiosRequestConfig, HandleMergeOptions, Params, UserAxiosConfig } from './types'
export class HttpClient {
  base: string
  config: ExtendAxiosRequestConfig | undefined
  http: AxiosInstance
  source: CancelTokenSource
  request: (url: string, method: string, param?: Params, config?: UserAxiosConfig) => Promise<any>
  mergeRequest: (options: Array<HandleMergeOptions>) => Promise<any>
  constructor(base: string, interceptor?: AxiosInterceptorOptions, config?: ExtendAxiosRequestConfig) {
    this.base = base
    this.config = config
    this.http = getInstance(interceptor, config)
    this.source = CancelToken.source()
    this.request = (url, method, param, config) => getRequest(this, url, method, param, config)
    this.mergeRequest = (options) => getMergeRequest(this, options)
  }
  // 通用请求客户端封装
  get = (url: string, param?: Params, config?: UserAxiosConfig) => this.request(url, REQUEST_METHOD.get, param, config)
  post = (url: string, param?: Params, config?: UserAxiosConfig) => this.request(url, REQUEST_METHOD.post, param, config)
  put = (url: string, param?: Params, config?: UserAxiosConfig) => this.request(url, REQUEST_METHOD.put, param, config)
  patch = (url: string, param?: Params, config?: UserAxiosConfig) => this.request(url, REQUEST_METHOD.patch, param, config)
  del = (url: string, param?: Params, config?: UserAxiosConfig) => this.request(url, REQUEST_METHOD.del, param, config)
  all = (options: HandleMergeOptions[]) => this.mergeRequest(options)
  cancel = (message: string) => this.source.cancel(message)
}

export default (function () {
  let instance: HttpClient
  return function ({ base = '', interceptor = {}, config = {} } = {}) {
    if (!instance) {
      instance = new HttpClient(base, interceptor, config as ExtendAxiosRequestConfig)
    }
    return instance
  }
})()
