import React from 'react'

import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'

export type TRouteTab = {
  HomeTab: undefined
  FavoritesTab: undefined
  ProfileTab: undefined
}

export interface IStackScreen {
  name: keyof TRouteTab
  component: React.ComponentType<any>
  options?: BottomTabNavigationOptions
  listeners?: any
}
