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
import MultipleCheckbox, {
  TCheckboxItem,
} from '~/components/MultipleCheckbox/MultipleCheckbox'
import translate from '~/lib/i18n/i18n'

const propertyTypes: TCheckboxItem[] = [
  {
    title: 'Detached Homes',
    details: 'no shared wall',
    name: 'detached',
    value: false,
  },
  {
    title: 'Townhouses',
    details: 'multi-level & shared walls',
    name: 'townhouse',
    value: false,
  },
  {
    title: 'High Rise Condos',
    details: '5 or more levels',
    name: 'highrise',
    value: false,
  },
]

const FilterScreen = () => {
  const navigation = useNavigation()
  const onCancel = () => {
    navigation.goBack()
  }

  return (
    <Container>
      <FilterInputsView>
        <MultipleCheckbox
          title={translate('filter.property_type_title')}
          callback={(selectedItems: TCheckboxItem[]) =>
            console.log(selectedItems)
          }
          arrayData={propertyTypes}
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
          <ConfirmButton>
            <ConfirmButtonText>
              {translate('filter.confirm', { houseNumber: '0' })}
            </ConfirmButtonText>
          </ConfirmButton>
        </ConfirmView>
      </FilterOptionsView>
    </Container>
  )
}

export default FilterScreen
