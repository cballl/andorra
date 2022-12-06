import {legacy_createStore,applyMiddleware} from 'redux'
import reducers from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = legacy_createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))

export default  store