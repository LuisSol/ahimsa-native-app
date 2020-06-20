import routines from '../routines'
import { getRandomQuote } from '../quoteAPI'
import types from './actionTypes'

export const changeRoutine = (index) => {    
    return { type: types.CHANGE_CURRENT_RUTINE , routineIndex: index, routine: routines[index] }
}

export const changeQuote = () => {    
    return { type: types.CHANGE_QUOTE, quote: getRandomQuote() }
}