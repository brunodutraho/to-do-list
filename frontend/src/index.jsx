import React from "react";
import ReactDom from "react-dom";
import { applyMiddleware ,createStore } from "redux";
import { Provider } from "react-redux";

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from "./main/app";
import reducers from "./main/reducers";

// biome-ignore lint: <explanation>
const devTools =
  process.env.NODE_ENV === "development" &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, devTools, applyMiddleware(thunk, multi, promise));          
 ReactDom.render(

    <Provider store={store}>
        <App />
    </Provider>
   
, document.getElementById("app"));
0