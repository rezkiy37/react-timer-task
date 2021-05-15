import { all } from 'redux-saga/effects'
import { timerWatcher } from './timer'

function* rootSaga() {
  yield all([timerWatcher()])
}

export default rootSaga
