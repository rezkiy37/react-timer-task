export type TTimerHook = () => TTimer['output']

export type TTimer = {
  output: {
    timerString: string
    startTimer: (startDate: number) => void
    clearTimer: () => void
  }
}
