import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import translate from '~/lib/i18n/i18n'
import { IStackScreen } from '~/@types/application/NavigationApplication.types'
import HomeScreen from '~/screens/Home/HomeScreen'

const HOME_SCREENS: IStackScreen[] = [
  {
    name: 'Home',
    component: HomeScreen,
  },
]

const Stack = createNativeStackNavigator()

const HomeScreenStack = () => (
  <Stack.Navigator
    screenOptions={{
      title: translate('header_title.home'),
      headerStyle: {
        backgroundColor: 'grey',
      },
    }}
  >
    {HOME_SCREENS.map(({ name, component }, index) => (
      <Stack.Screen key={index} name={name} component={component} />
    ))}
  </Stack.Navigator>
)

export default HomeScreenStack
