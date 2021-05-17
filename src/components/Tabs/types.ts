import { ChangeEvent, FC } from 'react'

export type TTabs = Array<TTab<TTabsTypes>>

export type TTab<N> = {
  name: N
  path: string
  label: string
  component: FC
}

export type TOnChangeTab = (event: ChangeEvent<{}>, value: any) => void
export type TDefineValue = (path: string) => number

/* eslint-disable */
export type TTabsTypes =
  | 'log'
  | 'chart'
