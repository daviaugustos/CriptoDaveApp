import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: flex-end;
`

export const FilterOptionsView = styled.View`
  flex: 1;
  flex-direction: row;
`

export const FilterInputsView = styled.View`
  flex: 10;
`

export const CancelView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
`

export const CancelButton = styled.TouchableOpacity`
  height: 90%;
  width: 90%;
  margin: 5px;
  background-color: ${({ theme }) => theme.colors.title.tertiary};
  flex-direction: row;
  padding-horizontal: 5px;
  align-items: center;
  justify-content: flex-start;
`

export const ConfirmView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ConfirmButton = styled.TouchableOpacity`
  height: 90%;
  width: 90%;
  margin: 5px;
  background-color: ${({ theme }) => theme.colors.title.primary};
  padding-horizontal: 5px;
  align-items: center;
  justify-content: center;
  border-radius: 10px; ;
`

export const ConfirmButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.title.tertiary};
  font-weight: bold;
`

export const CancelButtonText = styled.Text`
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.title.quinary};
  font-weight: bold;
`
export const FilterText = styled.Text``

export const CloseIcon = styled(MaterialIcon)`
  color: ${({ theme }) => theme.colors.title.quinary};
`
