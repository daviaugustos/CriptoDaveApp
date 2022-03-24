import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import translate from '~/lib/i18n/i18n'
import { IStackScreen, TRouteTab } from '~/routes/Routes.types'
import HomeScreenStack from '~/routes/HomeStack/HomeStack'
import FavoritesScreenStack from '~/routes/FavoritesStack/FavoritesStack'
import ProfileScreenStack from '~/routes/ProfileStack/ProfileStack'

const Tab = createBottomTabNavigator<TRouteTab>()

const Tabs: IStackScreen[] = [
  {
    name: 'HomeTab',
    component: HomeScreenStack,
    options: {
      tabBarLabel: translate('tabs_labels.home_tab'),
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcon name="map-search" size={25} color={color} />
      ),
      tabBarActiveTintColor: '#0a856e',
    },
  },
  {
    name: 'FavoritesTab',
    component: FavoritesScreenStack,
    options: {
      tabBarLabel: translate('tabs_labels.favorites_tab'),
      tabBarIcon: ({ color }) => (
        <MaterialIcon name="favorite" size={23} color={color} />
      ),
      tabBarActiveTintColor: '#0a856e',
    },
  },
  {
    name: 'ProfileTab',
    component: ProfileScreenStack,
    options: {
      tabBarLabel: translate('tabs_labels.profile_tab'),
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcon name="account-cog" size={25} color={color} />
      ),
      tabBarActiveTintColor: '#0a856e',
    },
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
