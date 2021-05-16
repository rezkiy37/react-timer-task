import { useCallback, useEffect, useRef, useState } from 'react'
import { TTimer, TTimerHook } from './types'
import { Log } from '../utils'

const INITIAL_TIMER_STRING: TTimer['output']['timerString'] = '00:00:00'
const TIMER_INTERVAL: number = 1000
const MS_IN_SECOND: number = 1000
const MS_IN_MIN: number = MS_IN_SECOND * 60
const MS_IN_HOUR: number = MS_IN_MIN * 60

export const useTimer: TTimerHook = () => {
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const [timerString, setTimerString] =
    useState<typeof INITIAL_TIMER_STRING>(INITIAL_TIMER_STRING)

  const startTimer = useCallback<TTimer['output']['startTimer']>(startDate => {
    Log.check('startTimer')

    const { floor } = Math

    const formatTime = (time: number): string => {
      return time.toString().padStart(2, '0')
    }

    timerRef.current = setInterval(() => {
      const diff: number = Date.now() - startDate

      const hours: number = floor(diff / MS_IN_HOUR)
      const mins: number = floor((diff - hours * MS_IN_HOUR) / MS_IN_MIN)
      const secs: number = floor(
        (diff - (hours * MS_IN_HOUR + mins * MS_IN_MIN)) / MS_IN_SECOND,
      )

      setTimerString(
        `${formatTime(hours)}:${formatTime(mins)}:${formatTime(secs)}`,
      )
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
