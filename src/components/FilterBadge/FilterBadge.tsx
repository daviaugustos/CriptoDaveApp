import React from 'react'

import {
  BadgeContainer,
  BadgeText,
  RemoveBadgeView,
  CloseIcon,
} from '~/components/FilterBadge/FilterBadge.styles'

interface FilterBadgeProps {
  label: string
  onClose: () => void
}

const FilterBadge: React.FC<FilterBadgeProps> = ({ label, onClose }) => {
  return (
    <BadgeContainer>
      <BadgeText>{label}</BadgeText>
      <RemoveBadgeView onPress={() => onClose()}>
        <CloseIcon name="close" size={20} />
      </RemoveBadgeView>
    </BadgeContainer>
  )
}

export default FilterBadge
