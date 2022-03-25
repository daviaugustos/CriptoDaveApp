import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

import {
  Container,
  MapContainer,
  FilterView,
  MarkerView,
} from '~/screens/Home/HomeScreen.styles'
import FilterSection from '~/components/FilterSection/FilterSection'
import { houseGetLocations } from '~/store/House/HouseCreators'
import { TApplicationState } from '~/store/StoreConfig'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const houses = useSelector((state: TApplicationState) =>
    state.house.filteredHouses.length
      ? state.house.filteredHouses
      : state.house.housesData,
  )

  useEffect(() => {
    dispatch(houseGetLocations())
  }, [dispatch])
  return (
    <Container>
      <MapContainer
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 52.639332,
          longitude: -1.135906,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {houses.map((houseItem, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: houseItem.location.latitude,
              longitude: houseItem.location.longitude,
            }}
          >
            <MarkerView />
          </Marker>
        ))}
      </MapContainer>
      <FilterView>
        <FilterSection />
      </FilterView>
    </Container>
  )
}

export default HomeScreen
