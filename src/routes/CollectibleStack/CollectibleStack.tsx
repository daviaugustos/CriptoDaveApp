import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import translate from '~/lib/i18n/i18n'
import { IStackScreen } from '~/@types/application/NavigationApplication.types'
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
      title: translate('header_title.collectible'),
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
