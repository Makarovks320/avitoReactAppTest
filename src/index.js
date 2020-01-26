import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux_store';
// import store from './redux/redux_store';
import {BrowserRouter} from 'react-router-dom'
// import {Provider} from 'react-redux'

const rerenderEntireTree =() => {
ReactDOM.render(
  <BrowserRouter>
  {/* <Provider store={store}> */}
    <App store={store} dispatch={store.dispatch.bind(store)}/>,
    {/* <App store = {store} dispatch = {store.dispatch.bind(store)}/> */}
   {/* </Provider> */}
  </BrowserRouter>,
   document.getElementById('root'));
}
rerenderEntireTree();
store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
