import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

import { Container } from '~/screens/Home/HomeScreen.styles'

const HomeScreen = () => {
  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </Container>
  )
}

export default HomeScreen
