import React from 'react'

import InputField from '~/components/InputField/InputField'
import FilterBadge from '~/components/FilterBadge/FilterBadge'
import {
  SearchView,
  FilterBadgesView,
  FilterSectionContainer,
  InputView,
} from '~/components/FilterSection/FilterSection.styles'

const FilterSection = () => {
  return (
    <FilterSectionContainer>
      <SearchView>
        <InputView>
          <InputField />
        </InputView>
      </SearchView>
      <FilterBadgesView>
        <FilterBadge />
        <FilterBadge />
        <FilterBadge />
      </FilterBadgesView>
    </FilterSectionContainer>
  )
}

export default FilterSection
