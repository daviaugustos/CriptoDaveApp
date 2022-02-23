import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { IStackScreen } from '~/@types/NavigationApplication.types'
import DiscoverScreen from '~/screens/Discover/DiscoverScreen'

const DISCOVER_SCREENS: IStackScreen[] = [
  {
    name: 'Discover',
    component: DiscoverScreen,
  },
]

const Stack = createStackNavigator()

const DiscoverScreenStack = () => (
  <Stack.Navigator>
    {DISCOVER_SCREENS.map(({ name, component }, index) => (
      <Stack.Screen key={index} name={name} component={component} />
    ))}
  </Stack.Navigator>
)

export default DiscoverScreenStack
