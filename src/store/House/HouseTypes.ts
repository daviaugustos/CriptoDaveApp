import { TCheckboxItem } from '~/components/MultipleCheckbox/MultipleCheckbox'
import { IHouseItem } from '~/@types/entities/HouseEntity'

export interface IHouseState {
  readonly propertyTypeSelected?: TCheckboxItem[]
  readonly housesData: IHouseItem[]
  readonly filteredHouses?: IHouseItem[]
}

export enum EHouseTypes {
  HOUSE_SET_PROPERTY_TYPE = '@house/HOUSE_SET_PROPERTY_TYPE',
  HOUSE_DELETE_PROPERTY_TYPE = '@house/HOUSE_DELETE_PROPERTY_TYPE',
  HOUSE_FILTER_BY_PROPERTY_TYPE = '@house/HOUSE_FILTER_BY_PROPERTY_TYPE',
  HOUSE_GET_LOCATIONS = '@house/HOUSE_GET_LOCATIONS',
  HOUSE_SET_LOCATIONS = '@house/HOUSE_SET_LOCATIONS',
  HOUSE_FILTER_LOCATIONS = '@house/HOUSE_FILTER_LOCATIONS',
  HOUSE_SEARCH_LOCATIONS = '@house/HOUSE_SEARCH_LOCATIONS',
}
