import React from 'react'
import { Provider } from 'react-redux'
import { useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Routes from '~/routes/Routes'
import { darkTheme, lightTheme } from '~/theme/variables'
import Store from '~/store/StoreConfig'

const App = () => {
  const scheme = useColorScheme()

  return (
    <Provider store={Store}>
      <SafeAreaProvider>
        <ThemeProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App
