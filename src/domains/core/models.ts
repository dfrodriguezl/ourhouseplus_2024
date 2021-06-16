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
    label: 'Center City',
    subLabel: 'High rise - High density',
  },
  {
    value: 1,
    label: 'Urban City',
    subLabel: 'Low rise - High density',

  },
  {
    value: 0,
    label: 'Suburban',
    subLabel: 'Low rise - Low density',
  }
]
