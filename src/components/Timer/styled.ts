import { styled } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

export const TimerContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const TimerButton = styled(Button)({
  width: 'fit-content',
})

export const TimerInput = styled(TextField)({
  width: 'fit-content',
  marginBottom: 20,
})

export const TimerTextCycle = styled(Box)({
  width: 200,
  height: 200,
  marginBottom: 20,
  display: 'flex',
  borderRadius: '50%',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: '0 2px 6px gray',
})

export const TimerText = styled(Typography)({
  fontSize: 28,
  color: 'blue',
  textAlign: 'center',
})
