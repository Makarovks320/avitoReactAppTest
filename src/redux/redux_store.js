import {combineReducers, createStore } from "redux";
import appReducer from './appReducer'

let reducers = combineReducers({
  gallery: appReducer
})
let store = createStore(reducers);

window.store = store;
export default store;
