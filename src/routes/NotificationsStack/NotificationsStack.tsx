import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { IStackScreen } from '~/@types/NavigationApplication.types'
import NotificationsScreen from '~/screens/Notifications/NotificationsScreen'

const NOTIFICATIONS_SCREENS: IStackScreen[] = [
  {
    name: 'Notifications',
    component: NotificationsScreen,
  },
]

const Stack = createStackNavigator()

const NotificationsScreenStack = () => (
  <Stack.Navigator>
    {NOTIFICATIONS_SCREENS.map(({ name, component }, index) => (
      <Stack.Screen key={index} name={name} component={component} />
    ))}
  </Stack.Navigator>
)

export default NotificationsScreenStack
