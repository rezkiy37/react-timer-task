import React from 'react'
import { TTabs } from './types'

export const StaticTabs: TTabs = [
  {
    name: 'log',
    path: '/',
    label: 'tasks log',
    component: () => <p>log</p>,
    // TODO implement real component
  },
  {
    name: 'chart',
    path: '/chart',
    label: 'tasks chart',
    component: () => <p>chart</p>,
    // TODO implement real component
  },
]
