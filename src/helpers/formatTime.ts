import { TFormatTime } from './types'

export const MS_IN_SECOND: number = 1000
export const MS_IN_MIN: number = MS_IN_SECOND * 60
export const MS_IN_HOUR: number = MS_IN_MIN * 60

export const formatTime: TFormatTime = time => {
  const { floor } = Math

  const toFormatedString = (hours: number) => {
    const dates: Array<string> = []

    const pushDate = (input: number): void => {
      dates.push(input.toString().padStart(2, '0'))
    }

    pushDate(hours)

    return (mins: number) => {
      pushDate(mins)

      return (secs: number): string => {
        pushDate(secs)

        return dates.join(':')
      }
    }
  }

  const hours: number = floor(time / MS_IN_HOUR)
  const mins: number = floor((time - hours * MS_IN_HOUR) / MS_IN_MIN)
  const secs: number = floor(
    (time - (hours * MS_IN_HOUR + mins * MS_IN_MIN)) / MS_IN_SECOND,
  )

  return toFormatedString(hours)(mins)(secs)
}
