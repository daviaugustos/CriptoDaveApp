import React from 'react'
import { PROVIDER_GOOGLE } from 'react-native-maps'

import {
  Container,
  MapContainer,
  MapContainerView,
  FilterView,
} from '~/screens/Home/HomeScreen.styles'
import FilterSection from '~/components/FilterSection/FilterSection'

const HomeScreen = () => {
  return (
    <Container>
      <MapContainer
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <FilterView>
        <FilterSection />
      </FilterView>
      <MapContainerView />
    </Container>
  )
}

export default HomeScreen
