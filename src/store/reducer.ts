import { combineReducers } from '@reduxjs/toolkit'
import { timerReducer } from './timer'

export default combineReducers({
  timer: timerReducer,
})
