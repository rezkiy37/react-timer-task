import { TFormatDate } from './types'

export const formatDate: TFormatDate = date => {
  return new Date(date).toLocaleTimeString()
}
