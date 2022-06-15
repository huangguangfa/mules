import type { AxiosRequestConfig, AxiosInstance } from 'axios'

export interface ExtendAxiosRequestConfig {
  clone(animal: AxiosRequestConfig): AxiosRequestConfig
  loading?: any
  retry?: number
}

export type ExtendAxiosInstance = AxiosInstance & {
  showLoading?: (options: any) => void
  hideLoading?: (options: any) => void
}

export interface UserAxiosConfig extends AxiosRequestConfig {
  query?: Params
  headers?: Params
  cancel?: boolean
}

export type HandleMergeOptions = {
  url: string
  config: {
    config?: UserAxiosConfig
    method: string
    param: Params
  }
}

export type Params<D = any> = Record<string, D>
