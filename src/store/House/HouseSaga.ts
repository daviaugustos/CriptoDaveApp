import { takeLatest, select, put } from 'redux-saga/effects'

import { EHouseTypes } from '~/store/House/HouseTypes'
import { IHouseItem } from '~/@types/entities/HouseEntity'
import { TCheckboxItem } from '~/components/MultipleCheckbox/MultipleCheckbox'
import { TApplicationState } from '~/store/StoreConfig'
import {
  houseSetPropertyType,
  houseSetLocations,
  houseFilterLocations,
} from '~/store/House/HouseCreators'

const HousesJson = require('~/store/House/house-data-stub.json')

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

export function* getLocationsSaga() {
  try {
    const convertedLocations: IHouseItem[] = HousesJson.map(houseItem => ({
      ...houseItem,
      location: {
        ...houseItem.location,
        latitude: parseFloat(houseItem.location.latitude),
        longitude: parseFloat(houseItem.location.longitude),
      },
    }))
    yield put(houseSetLocations(convertedLocations))
  } catch (error) {
    console.log(error)
  }
}

export function* searchLocationsSga(action) {
  try {
    const propertyTypeSelected: IHouseItem[] = yield select(
      (state: TApplicationState) => state.house.housesData,
    )
    const termSearched = action.payload.toLowerCase()

    const filteredHouses = propertyTypeSelected.filter(houseItem =>
      houseItem.location.street.name.includes(termSearched),
    )
    console.log(filteredHouses)
    yield put(houseFilterLocations(filteredHouses))
  } catch (error) {
    console.log(error)
  }
}

export default function* () {
  yield takeLatest(
    EHouseTypes.HOUSE_DELETE_PROPERTY_TYPE,
    deletePropertyTypeSaga,
  )
  yield takeLatest(EHouseTypes.HOUSE_GET_LOCATIONS, getLocationsSaga)
  yield takeLatest(EHouseTypes.HOUSE_SEARCH_LOCATIONS, searchLocationsSga)
}
