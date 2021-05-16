import React, { FC, ChangeEvent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startTaskAction, stopTaskAction, renameTaskAction } from '../../store'
import { useTimer, useTypedSelector } from '../../hooks'
import { Log } from '../../utils'
import {
  TimerContainer,
  TimerTextCycle,
  TimerButton,
  TimerInput,
  TimerText,
} from './styled'

const Timer: FC = () => {
  const dispatch = useDispatch()
  const { activeTask } = useTypedSelector(state => state.timer)
  const { timerString, startTimer, clearTimer } = useTimer()

  const onClickButton = () => {
    if (activeTask) {
      if (activeTask.title) {
        dispatch(stopTaskAction())
      } else {
        Log.ruddy('ActiveTask title is not')

        // TODO show error modal
      }
    } else dispatch(startTaskAction())
  }

  const onTitleInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    dispatch(renameTaskAction(value))
  }

  useEffect(() => {
    if (activeTask) startTimer(activeTask.startDate)
    else clearTimer()

    return () => {
      clearTimer()
    }
  }, [activeTask, startTimer, clearTimer])

  return (
    <TimerContainer>
      {!!activeTask && (
        <TimerInput
          required
          id="standard-required"
          placeholder="Name of your task"
          value={activeTask.title}
          onChange={onTitleInputChange}
        />
      )}

      <TimerTextCycle>
        <TimerText variant="body1">{timerString}</TimerText>
      </TimerTextCycle>

      <TimerButton variant="contained" onClick={onClickButton}>
        {activeTask ? 'Stop' : 'Start'}
      </TimerButton>
    </TimerContainer>
  )
}

export default Timer
