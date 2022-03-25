import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import MultipleCheckbox, {
  TCheckboxItem,
} from '~/components/MultipleCheckbox/MultipleCheckbox'
import translate from '~/lib/i18n/i18n'
import { houseFilterByProperty } from '~/store/House/HouseCreators'
import { TApplicationState } from '~/store/StoreConfig'

const FilterScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const propertyTypesSelected = useSelector(
    (state: TApplicationState) => state.house.propertyTypeSelected,
  )

  const onCancel = () => {
    navigation.goBack()
  }

  const onSelect = useCallback(
    (selectedItems: TCheckboxItem[]) => {
      dispatch(houseFilterByProperty(selectedItems))
    },
    [dispatch],
  )

  return (
    <Container>
      <FilterInputsView>
        <MultipleCheckbox
          title={translate('filter.property_type_title')}
          callback={selectedItems => onSelect(selectedItems)}
          arrayData={propertyTypesSelected}
        />
      </FilterInputsView>
      <FilterOptionsView>
        <CancelView>
          <CancelButton onPress={() => onCancel()}>
            <CloseIcon name="close" size={20} />
            <CancelButtonText>{translate('filter.cancel')}</CancelButtonText>
          </CancelButton>
        </CancelView>
        <ConfirmView>
          <ConfirmButton onPress={() => onCancel()}>
            <ConfirmButtonText>{translate('filter.confirm')}</ConfirmButtonText>
          </ConfirmButton>
        </ConfirmView>
      </FilterOptionsView>
    </Container>
  )
}

export default FilterScreen
