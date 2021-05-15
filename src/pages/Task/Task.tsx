import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { TTaskPageRouteParams } from './types'

const Task: FC = () => {
  const { id } = useParams<TTaskPageRouteParams>()

  return <></>
}

export default Task
