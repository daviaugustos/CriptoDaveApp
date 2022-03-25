import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  Container,
  FilterOptionsView,
  FilterInputsView,
  CancelView,
  CancelButton,
  CancelButtonText,
  ConfirmView,
  ConfirmButton,
  ConfirmButtonText,
  CloseIcon,
} from '~/screens/Filters/FiltersScreen.styles'

const FilterScreen = () => {
  const navigation = useNavigation()
  const onCancel = () => {
    navigation.goBack()
  }

  return (
    <Container>
      <FilterInputsView />
      <FilterOptionsView>
        <CancelView>
          <CancelButton onPress={() => onCancel()}>
            <CloseIcon name="close" size={20} />
            <CancelButtonText>Cancel</CancelButtonText>
          </CancelButton>
        </CancelView>
        <ConfirmView>
          <ConfirmButton>
            <ConfirmButtonText>View homes for sale</ConfirmButtonText>
          </ConfirmButton>
        </ConfirmView>
      </FilterOptionsView>
    </Container>
  )
}

export default FilterScreen
