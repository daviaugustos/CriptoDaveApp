import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Input, InputIconView } from './InputField.styles'

const InputField = () => {
  return (
    <Container>
      <InputIconView>
        <Icon name="rocket" size={30} color="#900" />
      </InputIconView>
      <Input />
    </Container>
  )
}

export default InputField
