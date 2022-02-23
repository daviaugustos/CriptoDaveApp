import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { IStackScreen } from '~/@types/NavigationApplication.types'
import CollectibleScreen from '~/screens/Collectible/CollectibleScreen'

const COLLECTIBLE_SCREENS: IStackScreen[] = [
  {
    name: 'CreateCollectible',
    component: CollectibleScreen,
  },
]

const Stack = createNativeStackNavigator()

const CollectibleScreenStack = () => (
  <Stack.Navigator
    screenOptions={{
      title: 'New collectible',
      headerStyle: {
        backgroundColor: 'grey',
      },
    }}
  >
    {COLLECTIBLE_SCREENS.map(({ name, component }, index) => (
      <Stack.Screen key={index} name={name} component={component} />
    ))}
  </Stack.Navigator>
)

export default CollectibleScreenStack
