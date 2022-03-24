import React from 'react'
import {
  TitleContainer,
  FilterIcon,
} from '~/components/HomeHeaderFilter/HomeHeaderFilter.style'

const HomeHeaderFilter = () => {
  return (
    <TitleContainer>
      <FilterIcon name="filter-menu" size={25} />
    </TitleContainer>
  )
}

export default HomeHeaderFilter
