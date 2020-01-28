import {combineReducers, createStore, applyMiddleware} from "redux";
import appReducer from './appReducer';
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  gallery: appReducer,
  form: formReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;
export default store;
