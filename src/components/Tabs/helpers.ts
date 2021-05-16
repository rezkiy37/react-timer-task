import { TDefineValue } from './types'
import { StaticTabs } from './static'

export const defineValue: TDefineValue = locationPath => {
  const index = StaticTabs.findIndex(({ path }) => path === locationPath)

  if (index >= 0) return index
  return 0
}
