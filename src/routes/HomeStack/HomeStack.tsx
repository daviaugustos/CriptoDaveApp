import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { IStackScreen } from '~/@types/NavigationApplication.types'
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
      title: 'Dave.',
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
