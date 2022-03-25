import { Reducer } from 'redux'
import { IHouseState, EHouseTypes } from '~/store/House/HouseTypes'
import { IHouseItem } from '~/@types/entities/HouseEntity'
import { TCheckboxItem } from '~/components/MultipleCheckbox/MultipleCheckbox'

const propertyTypes: TCheckboxItem[] = [
  {
    title: 'Detached',
    details: 'no shared wall',
    name: 'detached',
    value: false,
  },
  {
    title: 'Townhouses',
    details: 'multi-level & shared walls',
    name: 'townhouse',
    value: false,
  },
  {
    title: 'High Condos',
    details: '5 or more levels',
    name: 'highrise',
    value: false,
  },
]

const INITIAL_STATE: IHouseState = {
  propertyTypeSelected: [...propertyTypes],
  housesData: [],
  filteredHouses: [],
}

const HouseReducer: Reducer<IHouseState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EHouseTypes.HOUSE_SET_PROPERTY_TYPE: {
      return {
        ...state,
        propertyTypeSelected: action.payload,
      }
    }
    case EHouseTypes.HOUSE_SET_LOCATIONS: {
      return {
        ...state,
        housesData: action.payload,
      }
    }
    case EHouseTypes.HOUSE_FILTER_LOCATIONS: {
      return {
        ...state,
        filteredHouses: action.payload,
      }
    }
    default:
      return state
  }
}

export const houseDeletePropertyType = (propertyTypeName: string) => ({
  type: EHouseTypes.HOUSE_DELETE_PROPERTY_TYPE,
  payload: propertyTypeName,
})

export const houseSetPropertyType = (propertiesSelected: TCheckboxItem[]) => ({
  type: EHouseTypes.HOUSE_SET_PROPERTY_TYPE,
  payload: propertiesSelected,
})

export const houseGetLocations = () => ({
  type: EHouseTypes.HOUSE_GET_LOCATIONS,
})

export const houseSetLocations = (housesData: IHouseItem[]) => ({
  type: EHouseTypes.HOUSE_SET_LOCATIONS,
  payload: housesData,
})

export const houseFilterLocations = (filteredHouses: IHouseItem[]) => ({
  type: EHouseTypes.HOUSE_FILTER_LOCATIONS,
  payload: filteredHouses,
})
export default HouseReducer
