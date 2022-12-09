import {State,Action} from './type'
import {GET_CART_DATA,GET_FUNCTION_CART_DATA} from '../actionType'

const data:State  = {
    data:[],
    cartTwo:[]
}

function onePanelReducers (state= data,action:Action | any) {
    switch (action.type) {
        case GET_CART_DATA:
            return  {...state,data:action.result}
        case GET_FUNCTION_CART_DATA:
            return  {...state,cartTwo:action.result}
        default:
            return state
    }
}

export default onePanelReducers