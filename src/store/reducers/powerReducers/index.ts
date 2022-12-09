import type {State,Action} from './type'
import {GET_MENU,GET_ROUTER_PATH} from '../actionType'

const data:State  = {
    menu:[], // 左边的菜单
    personInto:[], // 个人信息
    routerPath:[]  // 传递的路由路径
}

const Menu = (state=data,action:Action | any) =>{
    switch (action.type) {
        case GET_MENU:
            return {...state,menu:action?.data?.data.menus}
        case GET_ROUTER_PATH :
            return  {...state,routerPath: action.data}
        default:
            return state
    }
}



export default Menu