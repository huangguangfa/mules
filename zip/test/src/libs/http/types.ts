import type { AxiosRequestConfig, AxiosInstance } from 'axios'

export interface ExtendAxiosRequestConfig {
  clone(animal: AxiosRequestConfig): AxiosRequestConfig
  loading?: {
    show: () => void
    hide: () => void
  }
  retry?: number
}

export type ExtendAxiosInstance = AxiosInstance & {
  showLoading?: (options: unknown) => void
  hideLoading?: (options: unknown) => void
}

export interface UserAxiosConfig extends AxiosRequestConfig {
  query?: Params
  headers?: Params
  cancel?: boolean
  base?: string
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
