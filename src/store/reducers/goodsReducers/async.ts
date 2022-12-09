import {GET_TABLE_DATA} from '../actionType'
import {httpTableData} from '../../../server/index'

const getTableAsync = (data:any,page:any) => {
    return httpTableData(data,page).then(res=>{
       return {type:GET_TABLE_DATA,result:res.data}
    })
}


export  {
    getTableAsync
}