import axios from 'axios';
import type {AxiosInstance, AxiosResponse, AxiosRequestConfig} from 'axios'
import type {HttpInterceptors, HttpRequestConfig} from './type'

class Http {
    // axios 实例
    instance: AxiosInstance

    // 实例拦截对象
    interceptorsObj?: HttpInterceptors

    constructor(config: HttpRequestConfig) {
        this.instance = axios.create(config);

        // 实例拦截对象
        this.interceptorsObj = config.interceptors

        this.instance.interceptors.request.use(
            this.interceptorsObj?.requestIntercetor,
            this.interceptorsObj?.requestIntercetorCatch
        )

        this.instance.interceptors.response.use(
            this.interceptorsObj?.responseInterceptor,
            this.interceptorsObj?.requestIntercetorCatch
        )


        // 全局拦截器
        this.instance.interceptors.request.use(
            (config: HttpRequestConfig) => {
                return config
            },
            (error: any) => {
                console.log(error)
            }
        )
        this.instance.interceptors.response.use(
            (res: AxiosResponse) => {
                return res
            },
            (error: any) => {
                return error
            }
        )
    }


    // 单个请求
    async request(config: AxiosRequestConfig): Promise<any> {
        if (this.interceptorsObj?.requestIntercetor) {
            config = this.interceptorsObj.requestIntercetor(config)
        }
        try {
            let result = await this.instance.request(config)
            if (this.interceptorsObj?.responseInterceptor) {
                result = this.interceptorsObj.responseInterceptor(result)
            }
            return result
        } catch (e:any) {
            return new Error(e)
        }
    }
}

export default Http
