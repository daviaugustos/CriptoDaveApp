import React, { useState, useEffect } from 'react'
import {
  Container,
  CheckboxComponent,
  CheckboxListView,
  TitleView,
  TitleText,
  CheckboxRowView,
  CheckboxLabelView,
  CheckboxLabelText,
  CheckboxLabelDetailText,
} from '~/components/MultipleCheckbox/MultipleCheckbox.styles'

export interface TCheckboxItem {
  title: string
  details: string
  name: string
  value: boolean
}

interface IMultipleCheckboxProps {
  callback: (items: TCheckboxItem[]) => void
  arrayData: TCheckboxItem[]
  title?: string
}

const MultipleCheckbox: React.FC<IMultipleCheckboxProps> = ({
  callback,
  arrayData,
  title,
}) => {
  const [checkBoxesData, setCheckBoxesData] = useState(arrayData)

  const toggleCheckbox = name => {
    const changedCheckboxes = checkBoxesData.map(item => {
      if (item.name === name) {
        return {
          ...item,
          value: !item.value,
        }
      }
      return item
    })

    setCheckBoxesData(changedCheckboxes)
  }

  useEffect(() => {
    callback(checkBoxesData)
  }, [callback, checkBoxesData])

  return (
    <Container>
      {title && (
        <TitleView>
          <TitleText>{title}</TitleText>
        </TitleView>
      )}
      <CheckboxListView>
        {checkBoxesData.map((checkboxItem, index) => (
          <CheckboxRowView
            key={index}
            onPress={() => toggleCheckbox(checkboxItem.name)}
          >
            <CheckboxComponent
              disabled={false}
              value={checkboxItem.value}
              onValueChange={() => toggleCheckbox(checkboxItem.name)}
            />
            <CheckboxLabelView>
              <CheckboxLabelText>{`${checkboxItem.title}`}</CheckboxLabelText>
              <CheckboxLabelDetailText>{`(${checkboxItem.details})`}</CheckboxLabelDetailText>
            </CheckboxLabelView>
          </CheckboxRowView>
        ))}
      </CheckboxListView>
    </Container>
  )
}

export default MultipleCheckbox
