import type { AxiosRequestConfig, AxiosInstance } from 'axios'

export type Loading = {
  show: () => void
  hide: () => void
}

export interface ExtendAxiosRequestConfig {
  clone(): AxiosRequestConfig
  loading?: Loading
  retry?: number
}

export type ExtendAxiosInstance = AxiosInstance & {
  showLoading?: () => void
  hideLoading?: () => void
}

export interface UserAxiosConfig extends AxiosRequestConfig {
  query?: Params
  headers?: Params
  cancel?: boolean
  base?: string
  hideLoading?: () => void
  showLoading?: () => void
  origin?: boolean
  loading?: boolean
}

export type HandleMergeOptions = {
  url: string
  config: {
    config?: UserAxiosConfig
    method: string
    param: Params
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Params<D = any> = Record<string, D>
