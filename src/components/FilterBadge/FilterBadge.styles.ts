import { Platform } from 'react-native'
import styled from 'styled-components/native'

export const BadgeContainer = styled.View`
  height: 100%;
  flex-direction: row;
  background-color: white;
  padding-vertical: ${Platform.OS === 'ios' ? '8px' : '5px'};
  padding-horizontal: 5px;
  border-radius: 10px;
  margin-left: 10px;
`

export const BadgeText = styled.Text`
  color: purple;
`
export const RemoveBadgeView = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-horizontal: 5px;
`
