import { TCheckboxItem } from '~/components/MultipleCheckbox/MultipleCheckbox'

export interface IHouseState {
  readonly propertyTypeSelected?: TCheckboxItem[]
}

export enum EHouseTypes {
  HOUSE_SET_PROPERTY_TYPE = '@house/HOUSE_SET_PROPERTY_TYPE',
  HOUSE_DELETE_PROPERTY_TYPE = '@house/HOUSE_DELETE_PROPERTY_TYPE',
}
