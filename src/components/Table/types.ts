import { Entities } from '../../@types'

export type TOnClickInfo = (id: Entities.Task['id']) => void

export type TOnClickDelete = TOnClickInfo
