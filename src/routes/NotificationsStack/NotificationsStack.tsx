import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { IStackScreen } from '~/@types/NavigationApplication.types'
import NotificationsScreen from '~/screens/Notifications/NotificationsScreen'

const NOTIFICATIONS_SCREENS: IStackScreen[] = [
  {
    name: 'Notifications',
    component: NotificationsScreen,
  },
]

const Stack = createNativeStackNavigator()

const NotificationsScreenStack = () => (
  <Stack.Navigator
    screenOptions={{
      title: 'Notifications',
      headerStyle: {
        backgroundColor: 'grey',
      },
    }}
  >
    {NOTIFICATIONS_SCREENS.map(({ name, component }, index) => (
      <Stack.Screen key={index} name={name} component={component} />
    ))}
  </Stack.Navigator>
)

export default NotificationsScreenStack
