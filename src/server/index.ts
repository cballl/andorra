import Http from "./http";

import {Data} from './type'

// let url = process.env.NODE_ENV === 'development' ? '/api' : process.env.REACT_APP_URL
let url = 'http://ceshi13.dishait.cn'
const http = new Http({
     baseURL:url
})


export const httpGetLogin = (data:Data) =>{
    return http.request({
        url:"/admin/login",
        method:"post",
        data
    })
}