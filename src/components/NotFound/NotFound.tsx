import React, { FC } from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import { useStylesNotFound } from './styles'
import { Log } from '../../utils'

const NotFound: FC = () => {
  const history = useHistory()
  const styles = useStylesNotFound()

  const onClickHome = () => {
    Log.event('NotFound.onClickHome()')

    history.push('/')
  }

  return (
    <Container className={styles.container}>
      <Typography color="textPrimary">
        There is not task with that id
      </Typography>

      <Button variant="contained" onClick={onClickHome}>
        Go home
      </Button>
    </Container>
  )
}

export default NotFound
