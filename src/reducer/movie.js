/**
 * Created by eCRF on 2018/5/23.
 */

import {RECEIVE_PRODUCTS} from '../constants/ActionTypes';

const movie =(state=[],action)=>{
    console.log('userReducer was called with state', state, 'and action', action.movies)
    switch (action.type){
        case RECEIVE_PRODUCTS:
            console.log(action.movies);
            return[
                ...state,   
                ...action.movies
                //     .reduce((obj , product) => {
                //     obj[product.id] = product
                //     return obj
                // }, [])
            ]
        default:
            return state
    }
}
//reducer 是对一些数据类型进行转化包括

export  default  movie