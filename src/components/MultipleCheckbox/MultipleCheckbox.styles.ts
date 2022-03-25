import { Platform } from 'react-native'
import styled from 'styled-components/native'
import CheckBox from '@react-native-community/checkbox'

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding-left: 10px;
`

export const TitleView = styled.View`
  flex: 1;
`

export const CheckboxListView = styled.View`
  flex: 15;
`

export const CheckboxRowView = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 10px;
`

export const CheckboxLabelText = styled.Text`
  color: ${({ theme }) => theme.colors.title.quinary};
  font-weight: bold;
  font-size: 15px;
`

export const CheckboxLabelDetailText = styled.Text`
  color: ${({ theme }) => theme.colors.title.quinary};
  font-size: 10px;
  padding-left: 5px;
`

export const CheckboxLabelView = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  padding-left: 10px;
  flex-direction: row;
`

export const TitleText = styled.Text`
  color: ${({ theme }) => theme.colors.title.quinary};
  font-weight: bold;
  font-size: 15px;
`

export const CheckboxComponent = styled(CheckBox).attrs(({ theme }) => {
  return Platform.OS === 'ios'
    ? {
        tintColor: theme.colors.text.primary,
        onTintColor: theme.colors.text.primary,
        onCheckColor: theme.colors.text.primary,
      }
    : {
        tintColors: {
          true: theme.colors.text.primary,
          false: theme.colors.text.primary,
        },
      }
})``
