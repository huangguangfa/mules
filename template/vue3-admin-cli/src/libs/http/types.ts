import type { AxiosRequestConfig, AxiosInstance } from "axios"
export interface MergeRequestConfig {
    config?: AxiosRequestConfig,
    loading?: Function,
}

export interface ExtendAxiosRequestConfig {
    clone(animal: AxiosRequestConfig): AxiosRequestConfig
    loading?: any,
}

export type ExtendAxiosInstance = AxiosInstance & {
    showLoading?: Function,
    hideLoading?: Function
}

export interface UserAxiosConfig {
    clone(animal: AxiosRequestConfig): AxiosRequestConfig,
    query?: Record<string, any>,
    headers: Record<string, any>,
    cancel?: Boolean,
}


export type HandleMergeOptions = {
    url: string,
    config: {
        config: UserAxiosConfig,
        method: string,
        param: any
    }
}

