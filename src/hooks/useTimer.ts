import { useCallback, useEffect, useRef, useState } from 'react'
import { TTimer, TTimerHook } from './types'
import { formatTime } from '../helpers'
import { Log } from '../utils'

const INITIAL_TIMER_STRING: TTimer['output']['timerString'] = '00:00:00'
const TIMER_INTERVAL: number = 1000

export const useTimer: TTimerHook = () => {
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const [timerString, setTimerString] =
    useState<typeof INITIAL_TIMER_STRING>(INITIAL_TIMER_STRING)

  const startTimer = useCallback<TTimer['output']['startTimer']>(startDate => {
    Log.check('startTimer')

    timerRef.current = setInterval(() => {
      const diff: number = Date.now() - startDate

      setTimerString(formatTime(diff))
    }, TIMER_INTERVAL)
  }, [])

  const clearTimer = useCallback<TTimer['output']['clearTimer']>(() => {
    if (timerRef.current) {
      Log.info('Timer was cleared', timerRef.current)

      setTimerString(INITIAL_TIMER_STRING)
      clearInterval(timerRef.current)
      timerRef.current = null
    } else {
      setTimerString(INITIAL_TIMER_STRING)

      Log.ruddy('There is not timerRef')
    }
  }, [])

  useEffect(() => {
    return () => {
      clearTimer()
    }
  }, [clearTimer])

  return {
    timerString,
    startTimer,
    clearTimer,
  }
}
