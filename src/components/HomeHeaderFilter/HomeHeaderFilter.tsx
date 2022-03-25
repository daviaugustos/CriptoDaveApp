import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  TitleContainer,
  FilterIcon,
} from '~/components/HomeHeaderFilter/HomeHeaderFilter.style'

const HomeHeaderFilter = () => {
  const navigation = useNavigation()
  const onFilterPress = () => {
    navigation.navigate('Filters')
  }

  return (
    <TitleContainer onPress={onFilterPress}>
      <FilterIcon name="filter-menu" size={25} />
    </TitleContainer>
  )
}

export default HomeHeaderFilter
