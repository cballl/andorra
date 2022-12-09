import { combineReducers } from 'redux'
import login from '../reducers/loginReducers/index'
import power from "./powerReducers";
import onePane from "./onePanelReducers";
import goods from '../reducers/goodsReducers/index'
const rootReducer = combineReducers({
    login,
    power,
    onePane,
    goods
})
export default rootReducer

