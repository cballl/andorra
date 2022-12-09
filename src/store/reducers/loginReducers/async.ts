import {httpGetLogin} from '../../../server'
import {Login} from './type'
import {GET_TOKEN} from '../actionType'


const loginAsync = (data: Login) => {
    return httpGetLogin(data).then((res:object | any) => {
        return {type: GET_TOKEN, data: res.data}
    })
}

export {
    loginAsync
}