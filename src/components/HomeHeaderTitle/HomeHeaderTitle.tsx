import React from 'react'
import translate from '~/lib/i18n/i18n'
import {
  TitleContainer,
  TitleText,
} from '~/components/HomeHeaderTitle/HomeHeaderTitle.styles'

const HomeHeaderTitle = () => {
  return (
    <TitleContainer>
      <TitleText>{translate('header_title.home')}</TitleText>
    </TitleContainer>
  )
}

export default HomeHeaderTitle
