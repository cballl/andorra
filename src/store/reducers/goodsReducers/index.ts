import {GET_TABLE_DATA} from '../actionType'

const data = {
    tableData:[]
}

const goodsReducers =   (state=data,action:any) =>{
    switch (action.type) {
        case GET_TABLE_DATA :
            return {...state,tableData: action.result}
        default:
            return state
    }
}

export default goodsReducers