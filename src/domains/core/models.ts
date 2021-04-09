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
  description: string;
}

export interface Density {
  label: string;
  subLabel: string;
  value: string;
}

export const Densities = [
  {
    value: '0',
    label: 'City Block',
    subLabel: 'High rise - High density',
  },
  {
    value: '1',
    label: 'Residential Quarter',
    subLabel: 'Low rise - High density',

  },
  {
    value: '2',
    label: 'Rural Quarter',
    subLabel: 'Low rise - Low density',
  }
]
