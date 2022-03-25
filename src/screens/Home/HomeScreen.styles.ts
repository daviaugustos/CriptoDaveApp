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

export const FilterView = styled.View`
  height: 150px;
`

export const MarkerView = styled.TouchableOpacity`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.title.primary};
  height: 30px;
  width: 40px;
`
