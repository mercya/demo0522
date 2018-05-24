/**
 * Created by eCRF on 2018/5/23.
 */

import {RECEIVE_PRODUCTS} from '../constants/ActionTypes';

const movie =(state=[],action)=>{
    console.log('userReducer was called with state', state, 'and action', action.movies)
    switch (action.type){
        case RECEIVE_PRODUCTS:
            return{
                ...state,
                ...action.movies.reduce((obj, product) => {
                    obj[product.id] = product
                    return obj
                }, {})
            }
        default:
            return state
    }
}

export  default  movie