import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { IStackScreen } from '~/@types/NavigationApplication.types'
import ProfileScreen from '~/screens/Profile/ProfileScreen'

const PROFILE_SCREENS: IStackScreen[] = [
  {
    name: 'Profile',
    component: ProfileScreen,
  },
]

const Stack = createStackNavigator()

const ProfileScreenStack = () => (
  <Stack.Navigator>
    {PROFILE_SCREENS.map(({ name, component }, index) => (
      <Stack.Screen key={index} name={name} component={component} />
    ))}
  </Stack.Navigator>
)

export default ProfileScreenStack
