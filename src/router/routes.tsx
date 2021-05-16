import React, { FC } from 'react'
import { MainPage, TaskPage } from '../pages'
import { TRoutesTree } from './types'

export const RoutesTree: TRoutesTree = {
  main: {
    name: 'main',
    path: '/',
    component: MainPage,
  },
  chart: {
    name: 'chart',
    path: '/chart',
    component: MainPage,
  },
  task: {
    name: 'task',
    path: '/task/:id',
    component: TaskPage,
  },
}
