import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { IStackScreen } from '~/@types/NavigationApplication.types'
import DiscoverScreen from '~/screens/Discover/DiscoverScreen'

const DISCOVER_SCREENS: IStackScreen[] = [
  {
    name: 'Discover',
    component: DiscoverScreen,
  },
]

const Stack = createNativeStackNavigator()

const DiscoverScreenStack = () => (
  <Stack.Navigator
    screenOptions={{
      title: 'Discover',
      headerStyle: {
        backgroundColor: 'grey',
      },
    }}
  >
    {DISCOVER_SCREENS.map(({ name, component }, index) => (
      <Stack.Screen key={index} name={name} component={component} />
    ))}
  </Stack.Navigator>
)

export default DiscoverScreenStack
