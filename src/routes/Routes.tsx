import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { IStackScreen, TRouteTab } from '~/routes/Routes.types'
import HomeScreenStack from '~/routes/HomeStack/HomeStack'
import DiscoverScreenStack from '~/routes/DiscoverStack/DiscoverStack'
import CollectibleScreenStack from '~/routes/CollectibleStack/CollectibleStack'
import NotificationsScreenStack from '~/routes/NotificationsStack/NotificationsStack'
import ProfileScreenStack from '~/routes/ProfileStack/ProfileStack'

const Tab = createBottomTabNavigator<TRouteTab>()

const Tabs: IStackScreen[] = [
  {
    name: 'HomeTab',
    component: HomeScreenStack,
  },
  {
    name: 'DiscoverTab',
    component: DiscoverScreenStack,
  },
  {
    name: 'CollectibleTab',
    component: CollectibleScreenStack,
  },
  {
    name: 'NotificationsTab',
    component: NotificationsScreenStack,
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
