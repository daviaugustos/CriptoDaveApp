import React from 'react'
import {
  BadgeContainer,
  BadgeText,
  RemoveBadgeView,
} from '~/components/FilterBadge/FilterBadge.styles'

const FilterBadge = () => {
  return (
    <BadgeContainer>
      <BadgeText>Toronto</BadgeText>
      <RemoveBadgeView>
        <BadgeText>X</BadgeText>
      </RemoveBadgeView>
    </BadgeContainer>
  )
}

export default FilterBadge
