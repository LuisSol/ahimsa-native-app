import { createStore } from 'redux'
import routineReducer from './routineReducer'

const store = createStore(routineReducer);

export default store;