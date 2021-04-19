export interface SearchParams {
  location: Location | undefined;
  area: number;
  density: Density;
}

export interface Location {
  id: number;
  city: string;
  maxPriFloors: number;
  maxSecFloors: number;
  streetFloors: number;
  windowPercentage: number;
  unitsNumberType: number;
  description: string;
  density: number;
  flatSize: number;
  flatType: number;
  regen: number;
}

export interface Density {
  label: string;
  subLabel: string;
  value: number;
}

export const Densities = [
  {
    value: 2,
    label: 'City Block',
    subLabel: 'High rise - High density',
  },
  {
    value: 1,
    label: 'Residential Quarter',
    subLabel: 'Low rise - High density',

  },
  {
    value: 0,
    label: 'Rural Quarter',
    subLabel: 'Low rise - Low density',
  }
]
