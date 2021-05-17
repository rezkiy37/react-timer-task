import React, { createElement, FC, useEffect, useState } from 'react'
import MaterialTabs from '@material-ui/core/Tabs'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import { useLocation, useHistory } from 'react-router-dom'
import { TOnChangeTab } from './types'
import { defineValue } from './helpers'
import { StaticTabs } from './static'
import { Log } from '../../utils'

const Tabs: FC = () => {
  const location = useLocation()
  const history = useHistory()

  const [value, setValue] = useState<number>(defineValue(location.pathname))

  const onChangeTab: TOnChangeTab = (e, tabIndex) => {
    Log.check('Tabs.onClickTab() => tabIndex', tabIndex)

    history.replace(StaticTabs[tabIndex].path)
  }

  useEffect(() => {
    Log.check('Tabs => location', location)

    setValue(defineValue(location.pathname))
  }, [location])

  return (
    <>
      <AppBar position="static">
        <MaterialTabs centered value={value} onChange={onChangeTab}>
          {StaticTabs.map(({ name, label }) => (
            <Tab key={`tab-${name}`} label={label} />
          ))}
        </MaterialTabs>
      </AppBar>

      {createElement(StaticTabs[value]?.component)}
    </>
  )
}

export default Tabs
