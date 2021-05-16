import React from 'react'
import { TTabs } from './types'
import { Table } from '..'

export const StaticTabs: TTabs = [
  {
    name: 'log',
    path: '/',
    label: 'tasks log',
    component: Table,
  },
  {
    name: 'chart',
    path: '/chart',
    label: 'tasks chart',
    component: Table,
    // TODO implement real component
  },
]
