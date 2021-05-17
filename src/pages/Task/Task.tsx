import React, { FC, useState } from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import MaterialTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import Container from '@material-ui/core/Container'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { formatDate, formatTime } from '../../helpers'
import { Breadcrumbs, NotFound } from '../../components'
import { TTaskPageRouteParams } from './types'
import { useTypedSelector } from '../../hooks'
import { removeTaskAction } from '../../store'
import { breadcrumbsTask } from './static'
import { Entities } from '../../@types'
import { Log } from '../../utils'

const Task: FC = () => {
  const { id: taskID } = useParams<TTaskPageRouteParams>()
  const { list } = useTypedSelector(state => state.timer)
  const dispatch = useDispatch()
  const history = useHistory()

  const [task] = useState<Entities.Task | null>(
    list.find(({ id }) => id.toString() === taskID) || null,
  )

  const onClickDelete = () => {
    Log.event('Table.onClickDelete() => taskID', taskID)

    dispatch(removeTaskAction(+taskID!))

    history.push('/')
  }

  if (!task) return <NotFound />

  const { startDate, duration, endDate, title, id } = task

  return (
    <Container>
      <Breadcrumbs links={breadcrumbsTask} pageTitle={`Task №${id}`} />

      <TableContainer>
        <MaterialTable aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>

              <TableCell>Task</TableCell>

              <TableCell>Time start</TableCell>

              <TableCell>Time end</TableCell>

              <TableCell>Time spend</TableCell>

              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>{id}</TableCell>

              <TableCell>{title}</TableCell>

              <TableCell>{formatDate(startDate)}</TableCell>

              <TableCell>{formatDate(endDate!)}</TableCell>

              <TableCell>{formatTime(duration!)}</TableCell>

              <TableCell>
                <Button variant="contained" onClick={onClickDelete}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </MaterialTable>
      </TableContainer>
    </Container>
  )
}

export default Task
