import { Entities } from '../../@types'

export type TInitialState = {
  activeTask: Entities.Task | null

  list: Array<Entities.Task>
}

export type TRenameActiveTaskActionPayload = Entities.Task['title']

export type TSetActiveTaskActionPayload = Entities.Task

export type TAddTaskToListActionPayload = Entities.Task
