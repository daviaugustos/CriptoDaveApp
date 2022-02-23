import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { IStackScreen } from '~/@types/NavigationApplication.types'
import HomeScreen from '~/screens/Home/HomeScreen'

const HOME_SCREENS: IStackScreen[] = [
  {
    name: 'Home',
    component: HomeScreen,
  },
]

const Stack = createStackNavigator()

const HomeScreenStack = () => (
  <Stack.Navigator>
    {HOME_SCREENS.map(({ name, component }) => (
      <Stack.Screen name={name} component={component} />
    ))}
  </Stack.Navigator>
)

export default HomeScreenStack
