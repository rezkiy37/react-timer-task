import { createAction } from '@reduxjs/toolkit'
import {
  TRenameActiveTaskActionPayload,
  TSetActiveTaskActionPayload,
  TAddTaskToListActionPayload,
} from './types'

const ADD_TASK_TO_LIST_ACTION = 'TIMER/ADD_TASK_TO_LIST_ACTION'
const SET_ACTIVE_TASK_ACTION = 'TIMER/SET_ACTIVE_TASK_ACTION'
const RENAME_TASK_ACTION = 'TIMER/RENAME_TASK_ACTION'
const START_TASK_ACTION = 'TIMER/START_TASK_ACTION'
const STOP_TASK_ACTION = 'TIMER/STOP_TASK_ACTION'

export const addTaskToListAction = createAction<
  TAddTaskToListActionPayload,
  typeof ADD_TASK_TO_LIST_ACTION
>(ADD_TASK_TO_LIST_ACTION)

export const setActiveTaskAction = createAction<
  TSetActiveTaskActionPayload,
  typeof SET_ACTIVE_TASK_ACTION
>(SET_ACTIVE_TASK_ACTION)

export const renameTaskAction =
  createAction<TRenameActiveTaskActionPayload, typeof RENAME_TASK_ACTION>(
    RENAME_TASK_ACTION,
  )

export const startTaskAction =
  createAction<void, typeof START_TASK_ACTION>(START_TASK_ACTION)

export const stopTaskAction =
  createAction<void, typeof STOP_TASK_ACTION>(STOP_TASK_ACTION)