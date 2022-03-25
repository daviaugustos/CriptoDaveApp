import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import InputField from '~/components/InputField/InputField'
import FilterBadge from '~/components/FilterBadge/FilterBadge'
import {
  SearchView,
  FilterBadgesView,
  FilterSectionContainer,
  InputView,
} from '~/components/FilterSection/FilterSection.styles'
import { TApplicationState } from '~/store/StoreConfig'
import {
  houseDeletePropertyType,
  houseSearchLocation,
} from '~/store/House/HouseCreators'

const FilterSection = () => {
  const propertyTypesSelected = useSelector((state: TApplicationState) =>
    state.house.propertyTypeSelected.filter(item => item.value),
  )
  const dispatch = useDispatch()

  const onRemove = useCallback(
    (removedPropertyType: string) => {
      dispatch(houseDeletePropertyType(removedPropertyType))
    },
    [dispatch],
  )

  const onChangeTextValue = useCallback(
    (searchedTerm: string) => {
      dispatch(houseSearchLocation(searchedTerm))
    },
    [dispatch],
  )

  return (
    <FilterSectionContainer>
      <SearchView>
        <InputView>
          <InputField onChangeTextValue={text => onChangeTextValue(text)} />
        </InputView>
      </SearchView>
      <FilterBadgesView>
        {propertyTypesSelected.map(propertyItem => (
          <FilterBadge
            key={propertyItem.name}
            label={propertyItem.title}
            onClose={() => onRemove(propertyItem.name)}
          />
        ))}
      </FilterBadgesView>
    </FilterSectionContainer>
  )
}

export default FilterSection
