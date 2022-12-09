import {httpGetCartData,httpGetFunctionCartData} from '../../../server/index'
import {GET_CART_DATA,GET_FUNCTION_CART_DATA} from  '../actionType'

const getCartData = () =>{
    return httpGetCartData().then((res)=>{
        return {type:GET_CART_DATA,result:res.data}
    })
}


const  getFunctionCartData  = () =>{
    return httpGetFunctionCartData().then(res=>{
        return {type:GET_FUNCTION_CART_DATA,result:res.data}
    })
}



export {
    getCartData,getFunctionCartData

}