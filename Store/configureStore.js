import { createStore, combineReducers } from 'redux';
import setAvatar from './Reducers/avatarReducer'

export default createStore(combineReducers({setAvatar}))
