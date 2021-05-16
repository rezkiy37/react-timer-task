import { createReducer } from '@reduxjs/toolkit'
import {
  clearActiveTaskAction,
  addTaskToListAction,
  setActiveTaskAction,
  renameTaskAction,
  removeTaskAction,
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

    builder.addCase(clearActiveTaskAction, state => ({
      ...state,
      activeTask: null,
    }))

    builder.addCase(removeTaskAction, (state, { payload }) => ({
      ...state,
      list: state.list.filter(({ id }) => id !== payload),
    }))
  },
)
