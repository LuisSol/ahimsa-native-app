import routines from '../routines'
import types from './actionTypes'

export const changeRoutine = (index) => {    
    return { type: types.CHANGE_CURRENT_RUTINE , routineIndex: index, routine: routines[index] }
}