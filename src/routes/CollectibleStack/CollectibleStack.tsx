import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { IStackScreen } from '~/@types/NavigationApplication.types'
import CollectibleScreen from '~/screens/Collectible/CollectibleScreen'

const COLLECTIBLE_SCREENS: IStackScreen[] = [
  {
    name: 'CreateCollectible',
    component: CollectibleScreen,
  },
]

const Stack = createStackNavigator()

const CollectibleScreenStack = () => (
  <Stack.Navigator>
    {COLLECTIBLE_SCREENS.map(({ name, component }, index) => (
      <Stack.Screen key={index} name={name} component={component} />
    ))}
  </Stack.Navigator>
)

export default CollectibleScreenStack
