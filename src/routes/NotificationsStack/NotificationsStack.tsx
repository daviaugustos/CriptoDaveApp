import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import translate from '~/lib/i18n/i18n'
import { IStackScreen } from '~/@types/application/NavigationApplication.types'
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
      title: translate('header_title.notifications'),
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
