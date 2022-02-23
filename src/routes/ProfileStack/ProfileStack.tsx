import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import translate from '~/lib/i18n/i18n'
import { IStackScreen } from '~/@types/application/NavigationApplication.types'
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
      title: translate('header_title.profile'),
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
