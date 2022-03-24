import React from 'react'
import { useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components/native'

import Routes from '~/routes/Routes'
import { darkTheme, lightTheme } from '~/theme/variables'

const App = () => {
  const scheme = useColorScheme()

  return (
    <ThemeProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
