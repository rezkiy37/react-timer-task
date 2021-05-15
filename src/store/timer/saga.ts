import { takeLatest } from 'redux-saga/effects'
import { startTaskAction, stopTaskAction } from './actions'
import { Log } from '../../utils'

function* startTaskWorker() {
  yield Log.info('startTaskWorker')
}

function* stopTaskWorker() {
  yield Log.info('stopTaskWorker')
}

export function* timerWatcher() {
  yield takeLatest(startTaskAction, startTaskWorker)
  yield takeLatest(stopTaskAction, stopTaskWorker)
}
