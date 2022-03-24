import styled from 'styled-components/native'
import MapView from 'react-native-maps'

export const Container = styled.View`
  flex: 1;
`

export const MapContainer = styled(MapView)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

export const MapContainerView = styled.View`
  flex: 8;
`

export const FilterView = styled.View`
  flex: 2;
`
