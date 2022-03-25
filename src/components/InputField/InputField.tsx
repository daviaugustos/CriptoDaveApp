import React from 'react'
import {
  Container,
  Input,
  InputIconView,
  SearchIcon,
} from './InputField.styles'
import translate from '~/lib/i18n/i18n'

const InputField = () => {
  return (
    <Container>
      <InputIconView>
        <SearchIcon name="search" size={20} />
      </InputIconView>
      <Input placeholder={translate('home.filter_section.input_placeholder')} />
    </Container>
  )
}

export default InputField
