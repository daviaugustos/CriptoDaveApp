interface IHouseStreet {
  id: number
  name: string
}

interface IHouseLocation {
  latitude: number
  longitude: number
  street: IHouseStreet
}

export interface IHouseItem {
  location_type: string
  location: IHouseLocation
  context: string
  price: number
  property_type: string
  id: number
  location_subtype: string
}
