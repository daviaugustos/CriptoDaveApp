import React from 'react'
import {
  BadgeContainer,
  BadgeText,
  RemoveBadgeView,
  CloseIcon,
} from '~/components/FilterBadge/FilterBadge.styles'

const FilterBadge = () => {
  return (
    <BadgeContainer>
      <BadgeText>Toronto</BadgeText>
      <RemoveBadgeView>
        <CloseIcon name="close" size={20} />
      </RemoveBadgeView>
    </BadgeContainer>
  )
}

export default FilterBadge
