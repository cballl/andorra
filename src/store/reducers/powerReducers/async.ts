import {GET_MENU,GET_ROUTER_PATH} from '../actionType'
import {httpGetMenu} from '../../../server/index'

const getMenu = () =>{
   return  httpGetMenu().then((res)=>{
       return {type:GET_MENU,data:res.data}
    })
}

const getRouterPath = (data:object | any) =>{
    return {type:GET_ROUTER_PATH,data}
}


export {
    getMenu,
    getRouterPath
}