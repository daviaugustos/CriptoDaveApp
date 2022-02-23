import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { IStackScreen } from '~/@types/NavigationApplication.types'
import ProfileScreen from '~/screens/Profile/ProfileScreen'

const PROFILE_SCREENS: IStackScreen[] = [
  {
    name: 'Profile',
    component: ProfileScreen,
  },
]

const Stack = createNativeStackNavigator()

const ProfileScreenStack = () => (
  <Stack.Navigator
    screenOptions={{
      title: 'Profile',
      headerStyle: {
        backgroundColor: 'grey',
      },
    }}
  >
    {PROFILE_SCREENS.map(({ name, component }, index) => (
      <Stack.Screen key={index} name={name} component={component} />
    ))}
  </Stack.Navigator>
)

export default ProfileScreenStack
