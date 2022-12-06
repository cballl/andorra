import type {State,Action} from './type'
import {GET_TOKEN} from'../actionType'

const data:State = {
    token:''
}

const login = (state=data,action:Action | any) =>{
    switch (action.type) {
        case GET_TOKEN :
                let token = action.data.data.token || ''
                localStorage.setItem('token',token)
                return {...state,token:action.data.data.token}
            default:
                return state
        }
}


export default login