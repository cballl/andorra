import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HttpInterceptors {
    requestIntercetor?: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestIntercetorCatch?: (error: any) => any
    responseInterceptor?: (res: AxiosResponse) => AxiosResponse
    responseInterceptorCatch?: (error: any) => any
}

export interface HttpRequestConfig extends AxiosRequestConfig {
    interceptors?: HttpInterceptors
}


