import { combineReducers } from 'redux';
import movieReducer from './movieReducer'

export default combineReducers({list: movieReducer})