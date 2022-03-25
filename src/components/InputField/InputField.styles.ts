import styled from 'styled-components/native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const Input = styled.TextInput`
  background-color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 50%;
  width: 60%;
`

export const InputIconView = styled.View`
  background-color: ${({ theme }) => theme.colors.title.tertiary};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 50%;
  width: 13%;
  justify-content: center;
  align-items: center;
`

export const SearchIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.title.quinary};
`
