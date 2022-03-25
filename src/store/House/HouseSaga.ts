import { takeLatest, select, put } from 'redux-saga/effects'

import { EHouseTypes } from '~/store/House/HouseTypes'
import { TCheckboxItem } from '~/components/MultipleCheckbox/MultipleCheckbox'
import { TApplicationState } from '~/store/StoreConfig'
import { houseSetPropertyType } from '~/store/House/HouseCreators'

export function* deletePropertyTypeSaga(action) {
  try {
    const propertyTypeSelected: TCheckboxItem[] = yield select(
      (state: TApplicationState) => state.house.propertyTypeSelected,
    )

    const updatedProperties = propertyTypeSelected.map(propertyItem => {
      if (propertyItem.name === action.payload) {
        return {
          ...propertyItem,
          value: false,
        }
      }
      return propertyItem
    })

    yield put(houseSetPropertyType(updatedProperties))
  } catch (error) {
    console.log(error)
  }
}

export default function* () {
  yield takeLatest(
    EHouseTypes.HOUSE_DELETE_PROPERTY_TYPE,
    deletePropertyTypeSaga,
  )
}
