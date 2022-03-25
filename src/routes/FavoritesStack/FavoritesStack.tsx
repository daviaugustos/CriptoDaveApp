import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import translate from '~/lib/i18n/i18n'
import { IStackScreen } from '~/@types/application/NavigationApplication.types'
import FavoritesScreen from '~/screens/Favorites/FavoritesScreen'

const FAVORITE_SCREENS: IStackScreen[] = [
  {
    name: 'CreateFavorites',
    component: FavoritesScreen,
  },
]

const Stack = createNativeStackNavigator()

const FavoritesScreenStack = () => (
  <Stack.Navigator
    screenOptions={{
      title: translate('header_title.favorite'),
      headerStyle: {
        backgroundColor: 'grey',
      },
    }}
  >
    {FAVORITE_SCREENS.map(({ name, component }, index) => (
      <Stack.Screen key={index} name={name} component={component} />
    ))}
  </Stack.Navigator>
)

export default FavoritesScreenStack
