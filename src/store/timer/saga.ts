import { put, select, takeLatest } from 'redux-saga/effects'
import {
  addTaskToListAction,
  clearActiveTaskAction,
  setActiveTaskAction,
  startTaskAction,
  stopTaskAction,
} from './actions'
import { getTimerSelector } from './selectors'
import { Log } from '../../utils'

function* startTaskWorker() {
  Log.info('startTaskWorker')

  const { list }: ReturnType<typeof getTimerSelector> = yield select(
    getTimerSelector,
  )

  /* eslint-disable prefer-spread */
  yield put(
    setActiveTaskAction({
      id:
        Math.max.apply(
          Math,
          list.map(({ id }) => id),
        ) + 1,
      startDate: Date.now(),
      title: '',
    }),
  )
  /* eslint-enable prefer-spread */
}

function* stopTaskWorker() {
  Log.info('stopTaskWorker')

  const { activeTask }: ReturnType<typeof getTimerSelector> = yield select(
    getTimerSelector,
  )

  if (activeTask) {
    const endDate = Date.now()

    yield put(
      addTaskToListAction({
        ...activeTask,
        duration: endDate - activeTask.startDate,
        endDate,
      }),
    )

    yield put(clearActiveTaskAction())
  } else Log.ruddy('There is not activeTask')
}

export function* timerWatcher() {
  yield takeLatest(startTaskAction, startTaskWorker)
  yield takeLatest(stopTaskAction, stopTaskWorker)
}
