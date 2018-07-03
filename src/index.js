/**
 * Created by eCRF on 2018/5/23.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'antd/lib/button';
import './css/App.css';
import { createStore ,applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { getAllMovies } from './actions'
import Index from './components/Detail';
import reducer from './reducer'
import Main from './components/Main'

const middleware = [ thunk ]

const store=createStore(reducer,applyMiddleware(...middleware))
store.dispatch(getAllMovies())

ReactDOM.render(
    <Provider  store={store}>
        <Main/>
    </Provider>,
    document.getElementById('app')
)