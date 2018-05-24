/**
 * Created by eCRF on 2018/5/23.
 */
import * as types from '../constants/ActionTypes'
const getMovies = movies =>(
    {
        type:types.RECEIVE_PRODUCTS,
        movies:movies
    }
)
export const getAllMovies= () => dispatch => {
    fetch('../api/movies.json')
        .then(response => response.json())
        .then(json => dispatch(getMovies(json)))
}
