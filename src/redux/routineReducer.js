import types from './actionTypes'
import routines from '../routines'
import { getRandomQuote } from '../quoteAPI'

const defaultState = {
    routineIndex: 0,
    routine: routines[0],
    quote: getRandomQuote()
}

const routineReducer = (state = defaultState, action) => {
    switch(action.type) {
        case types.CHANGE_CURRENT_RUTINE:
            return {
                routineIndex: action.routineIndex,
                routine: action.routine
            } 
        case types.CHANGE_QUOTE:
            return {
                ...state,
                quote: action.quote
            }
        default:
            return state
    }
}

export default routineReducer;