import Http from "./http";
import {Data} from './type'

let url = 'http://ceshi13.dishait.cn'
const http = new Http({
     baseURL:url,
})

// login
export const httpGetLogin = (data:Data) =>{
    return http.request({
        url:"/admin/login",
        method:"post",
        data
    })
}

// 获取menu
export const httpGetMenu = () =>{
    return http.request({
        url:"/admin/getinfo",
        method:"post",
    })
}


// 获取首页卡片的数据
export const httpGetCartData = ()=>{
    return http.request({
        method:"get",
        url:"/admin/statistics1"
    })
}

// 获取首页第二行卡片的数据
export const httpGetFunctionCartData = ()=>{
    return http.request({
        method:"get",
        url:"/admin/statistics2"
    })
}


export const httpTableData = (params:any,page=1) =>{
    return http.request({
        method:"get",
        url:`/admin/goods/${page}`,
        params
    })
}



