import React from 'react'

import { NativeStackNavigationOptions } from '@react-navigation/native-stack'

export type THomeStackScreens = {
  Home: undefined
  ItemDetail: undefined
}

export type TDiscoverStackScreens = {
  Discover: undefined
  CategoryDetail: undefined
}

export type TCollectibleStackScreens = {
  CreateCollectible: undefined
  FinishCollectible: undefined
}

export type TNotificationsStackScreens = {
  Notifications: undefined
  NotificationDetail: undefined
}

export type TProfileStackScreens = {
  Profile: undefined
  EditProfile: undefined
}

export type TStackScreens = THomeStackScreens &
  TDiscoverStackScreens &
  TCollectibleStackScreens &
  TNotificationsStackScreens &
  TProfileStackScreens

export interface IStackScreen {
  name: keyof TStackScreens
  component: React.ComponentType<any>
  options?: NativeStackNavigationOptions
}
