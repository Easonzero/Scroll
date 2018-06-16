import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { injectGlobal } from 'styled-components';
import App from './App';
import {afterSwitchAction} from "./actions";

injectGlobal`
  html{
    font-size:${10 * document.documentElement.clientWidth / 64}px;
  }
  
  body{
    background: #232a32;
    overflow-y: hidden;
    margin: 0;
  }
`;
const store = createStore(rootReducer);

setTimeout(()=>store.dispatch(afterSwitchAction()),0);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
