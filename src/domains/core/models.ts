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
  lat: number;
  lon: number;
  p_vivs: number;
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

export const teamMembers = [
  {
    name: 'Juan Perez Amaya',
    position: 'CEO',
    city: 'Paris, France',
  },
  {
    name: 'Felix Beytout',
    position: 'CTO / Technology Developer & Lead Architect',
    city: 'Paris, France',
  },
  {
    name: 'Alex Garcia',
    position: 'CDO / Senior Software Engineer & AI Developer',
    city: 'Milwaukee, USA',
  },
  {
    name: 'Sebastien David',
    position: 'Advisor CSO / Global Market Research',
    city: 'London, UK',
  },
  {
    name: 'Lucas Botero',
    position: 'Advisor CSO / Latam Market Research',
    city: 'Bogotá, Colombia',
  },
  {
    name: 'Urszula Manschot',
    position: 'Lead UX/UI Designer',
    city: 'Milwaukee, USA',
  },
  {
    name: 'Diego Rodríguez',
    position: 'Lead Data / Front End Developer',
    city: 'Bogotá, Colombia',
  },
  {
    name: 'Radhi Aditya',
    position: 'Asian Market Research & Development',
    city: 'Jakarta, Indonesia',
  }
]
