import React, { FC } from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import MaterialTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import { TOnClickDelete, TOnClickInfo } from './types'
import { useTypedSelector } from '../../hooks'
import { formatTime } from '../../helpers'
import { formatDate } from './helpers'
import { Log } from '../../utils'

const Table: FC = () => {
  const { list } = useTypedSelector(state => state.timer)

  const onClickInfo: TOnClickInfo = id => {
    Log.event('Table.onClickInfo() => id', id)

    // TODO implement history.push here
  }

  const onClickDelete: TOnClickDelete = id => {
    Log.event('Table.onClickDelete() => id', id)

    // TODO implement dispatch here
  }

  return (
    <TableContainer>
      <MaterialTable aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>

            <TableCell>Task</TableCell>

            <TableCell>Time start</TableCell>

            <TableCell>Time end</TableCell>

            <TableCell>Time spend</TableCell>

            <TableCell>Info</TableCell>

            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {list.map(({ id, title, startDate, endDate, duration }) => (
            <TableRow key={`table-task-${id}`}>
              <TableCell>{id}</TableCell>

              <TableCell>{title}</TableCell>

              <TableCell>{formatDate(startDate)}</TableCell>

              <TableCell>{formatDate(endDate!)}</TableCell>

              <TableCell>{formatTime(duration!)}</TableCell>

              <TableCell>
                <Button variant="contained" onClick={() => onClickInfo(id)}>
                  Info
                </Button>
              </TableCell>

              <TableCell>
                <Button variant="contained" onClick={() => onClickDelete(id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  )
}

export default Table
