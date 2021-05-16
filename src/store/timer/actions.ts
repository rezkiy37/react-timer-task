import { createAction } from '@reduxjs/toolkit'
import {
  TRenameActiveTaskActionPayload,
  TRemoveTaskToListActionPayload,
  TSetActiveTaskActionPayload,
  TAddTaskToListActionPayload,
} from './types'

const CLEAR_ACTIVE_TASK_ACTION = 'TIMER/CLEAR_ACTIVE_TASK_ACTION'
const ADD_TASK_TO_LIST_ACTION = 'TIMER/ADD_TASK_TO_LIST_ACTION'
const SET_ACTIVE_TASK_ACTION = 'TIMER/SET_ACTIVE_TASK_ACTION'
const RENAME_TASK_ACTION = 'TIMER/RENAME_TASK_ACTION'
const REMOVE_TASK_ACTION = 'TIMER/REMOVE_TASK_ACTION'
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

export const clearActiveTaskAction = createAction<
  void,
  typeof CLEAR_ACTIVE_TASK_ACTION
>(CLEAR_ACTIVE_TASK_ACTION)

export const removeTaskAction =
  createAction<TRemoveTaskToListActionPayload, typeof REMOVE_TASK_ACTION>(
    REMOVE_TASK_ACTION,
  )
