import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import translate from '~/lib/i18n/i18n'
import { IStackScreen } from '~/@types/application/NavigationApplication.types'
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
      title: translate('header_title.discover'),
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
