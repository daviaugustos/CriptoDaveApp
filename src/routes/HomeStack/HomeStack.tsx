import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { IStackScreen } from '~/@types/application/NavigationApplication.types'
import HomeScreen from '~/screens/Home/HomeScreen'
import HomeTitle from '~/components/HomeTitle/HomeTitle'

const HOME_SCREENS: IStackScreen[] = [
  {
    name: 'Home',
    component: HomeScreen,
    screenOptions: {
      headerStyle: {
        backgroundColor: '#0a856e',
      },
      headerTitle: () => <HomeTitle />,
    },
  },
]

const Stack = createNativeStackNavigator()

const HomeScreenStack = () => (
  <Stack.Navigator>
    {HOME_SCREENS.map(({ name, component, screenOptions }, index) => (
      <Stack.Screen
        key={index}
        name={name}
        component={component}
        options={screenOptions}
      />
    ))}
  </Stack.Navigator>
)

export default HomeScreenStack
