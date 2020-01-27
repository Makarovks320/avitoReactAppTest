import {combineReducers, createStore, applyMiddleware} from "redux";
import appReducer from './appReducer';
import thunkMiddleWare from "redux-thunk";

let reducers = combineReducers({
  gallery: appReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;
export default store;
