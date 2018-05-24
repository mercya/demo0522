/**
 * Created by eCRF on 2018/5/23.
 */
import {combineReducers} from 'redux';
import movie from './movie'
const details=combineReducers(
    {
        movie,
    }
);
export default details