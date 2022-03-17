import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { IStackScreen, TRouteTab } from '~/routes/Routes.types'
import HomeScreenStack from '~/routes/HomeStack/HomeStack'
import FavoritesScreenStack from '~/routes/FavoritesStack/FavoritesStack'
import ProfileScreenStack from '~/routes/ProfileStack/ProfileStack'

const Tab = createBottomTabNavigator<TRouteTab>()

const Tabs: IStackScreen[] = [
  {
    name: 'HomeTab',
    component: HomeScreenStack,
  },
  {
    name: 'FavoritesTab',
    component: FavoritesScreenStack,
  },
  {
    name: 'ProfileTab',
    component: ProfileScreenStack,
  },
]

const Routes: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
      }}
    >
      {Tabs.map((tabItem, index) => (
        <Tab.Screen key={index} {...tabItem} />
      ))}
    </Tab.Navigator>
  )
}

export default Routes
