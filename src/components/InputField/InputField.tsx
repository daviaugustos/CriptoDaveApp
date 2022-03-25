import React from 'react'
import {
  Container,
  Input,
  InputIconView,
  SearchIcon,
} from './InputField.styles'
import translate from '~/lib/i18n/i18n'

interface InputFieldProps {
  onChangeTextValue: (text: string) => void
}

const InputField: React.FC<InputFieldProps> = ({ onChangeTextValue }) => {
  return (
    <Container>
      <InputIconView>
        <SearchIcon name="search" size={20} />
      </InputIconView>
      <Input
        placeholder={translate('home.filter_section.input_placeholder')}
        onChangeText={text => onChangeTextValue(text)}
      />
    </Container>
  )
}

export default InputField
