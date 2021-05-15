import { createReducer } from '@reduxjs/toolkit'
import {
  addTaskToListAction,
  setActiveTaskAction,
  renameTaskAction,
  stopTaskAction,
} from './actions'
import { TInitialState } from './types'

const InitialState: TInitialState = {
  activeTask: null,
  list: [],
}

export const timerReducer = createReducer<TInitialState>(
  InitialState,
  builder => {
    builder.addCase(setActiveTaskAction, (state, { payload }) => ({
      ...state,
      activeTask: payload,
    }))

    builder.addCase(renameTaskAction, (state, { payload }) => ({
      ...state,
      activeTask: {
        ...state.activeTask!,
        title: payload,
      },
    }))

    builder.addCase(addTaskToListAction, (state, { payload }) => ({
      ...state,
      list: [...state.list, payload],
    }))

    builder.addCase(stopTaskAction, state => ({
      ...state,
      activeTask: null,
    }))
  },
)
