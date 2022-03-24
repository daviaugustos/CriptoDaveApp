import React from 'react'
import translate from '~/lib/i18n/i18n'
import {
  TitleContainer,
  TitleText,
} from '~/components/HomeTitle/HomeTitle.style'

const HomeTitle = () => {
  return (
    <TitleContainer>
      <TitleText>{translate('header_title.home')}</TitleText>
    </TitleContainer>
  )
}

export default HomeTitle
