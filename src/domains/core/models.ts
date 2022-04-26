import { juan, felix, alex, sebastien, lucas, ula, diego, radhi, facadeOptionA, facadeOptionB, facadeOptionC } from 'assets';

export interface SearchParams {
  location: LocationSimple | undefined;
  area: number;
  density: Density;
}

export interface Location {
  id: number;
  city: string;
  density: number;
  description: string;
  urban: {
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
    axisSelection: number;
    typologies: number;
    emptySpaceSelection: number;
    undefinedTower: number;
    streetDensity: number;
    islandSpacings: number;
    floorsAlignment: number;
    unitsOrganization: number;
  },
  suburban: {
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
    axisSelection: number;
    typologies: number;
    emptySpaceSelection: number;
    undefinedTower: number;
    streetDensity: number;
    islandSpacings: number;
    floorsAlignment: number;
    unitsOrganization: number;
  }
}

export interface LocationSimple {
  id: number;
  city: string;
  densityGeneral: number;
  description: string;
  maxPriFloors: number;
  maxSecFloors: number;
  streetFloors: number;
  windowPercentage: number;
  unitsNumberType: number;
  density: number;
  flatSize: number;
  flatType: number;
  regen: number;
  lat: number;
  lon: number;
  p_vivs: number;
  axisSelection: number;
  typologies: number;
  emptySpaceSelection: number;
  undefinedTower: number;
  streetDensity: number;
  islandSpacings: number;
  floorsAlignment: number;
  unitsOrganization: number;
  balconyType?: number;
}

export interface Density {
  label: string;
  subLabel: string;
  value: number;
  type: string;
}

export interface Terrain {
  name?: string;
  owner?: string;
  path?: string;
  location?: LocationSimple;
  densityGeneral?: number;
}

export const Densities = [
  {
    value: 2,
    label: 'Center City',
    subLabel: 'High rise - High density',
    type: 'urban'
  },
  {
    value: 1,
    label: 'Urban City',
    subLabel: 'Low rise - High density',
    type: 'urban'

  },
  {
    value: 0,
    label: 'Suburban',
    subLabel: 'Low rise - Low density',
    type: 'suburban'
  }
]

export const teamMembers = [
  {
    id: 1,
    name: 'Juan Perez Amaya',
    position: 'CEO',
    city: 'Paris, France',
    desc_1: 'Entrepreneur in several industries: food, digital services, architecture, art. Has worked for industries as: luxury, architecture, arts.',
    desc_2: 'BA Architecture and Arts BFA. Founder of El Atelier and Tresesenta.',
    picture: juan
  },
  {
    id: 2,
    name: 'Felix Beytout',
    position: 'CTO / Technology Developer & Lead Architect',
    city: 'Paris, France',
    desc_1: 'Has worked for several award winning architectural firms as: Lacaton & Vassal, NP2F and Moreau Kusunoki.',
    desc_2: 'Architect from Malaquais-Paris. Co-Founder of El Atelier',
    picture: felix
  },
  // {
  //   id: 3,
  //   name: 'Alex Garcia',
  //   position: 'CDO / Senior Software Engineer & AI Developer',
  //   city: 'Milwaukee, USA',
  //   desc_1: 'MS computer science. Over a decade of experience as a software developer & engineer.',
  //   desc_2: 'Has worked for a lead sofware engineer in companies as: Milwaukee Tool and GMR Marketing.',
  //   picture: alex
  // },
  // {
  //   id: 4,
  //   name: 'Sebastien David',
  //   position: 'Advisor CSO / Global Market Research',
  //   city: 'London, UK',
  //   desc_1: "BA International Relations. Over a decade's experience connecting investors and industry in emerging markets, including in real estate and disruptive industries",
  //   picture: sebastien
  // },
  // {
  //   id: 5,
  //   name: 'Lucas Botero',
  //   position: 'Advisor CSO / Latam Market Research',
  //   city: 'Bogotá, Colombia',
  //   picture: lucas
  // },
  {
    id: 6,
    name: 'Urszula Manschot',
    position: 'Lead UX/UI Designer',
    city: 'Milwaukee, USA',
    picture: ula
  },
  {
    id: 7,
    name: 'Diego Rodríguez',
    position: 'Lead Data / Front End Developer',
    city: 'Bogotá, Colombia',
    picture: diego
  },
  // {
  //   id: 8,
  //   name: 'Radhi Aditya',
  //   position: 'Asian Market Research & Development',
  //   city: 'Jakarta, Indonesia',
  //   picture: radhi
  // }
]

export const carouselItem = [
  {
    id: 0,
    img: facadeOptionA,
    name: 'Option A'
  },
  {
    id: 1,
    img: facadeOptionB,
    name: 'Option B'
  },
  {
    id: 2,
    img: facadeOptionC,
    name: 'Option C'
  }
]

export interface ProjectBudget {
  id: number;
  name: string;
  type: string;
  budgetTarget: number;
  currency: string;
  spended: number;
  spendedPercentage: number;
  email?: string;
  imgs?:ImgBudget[]
}

export interface ImgBudget {
  date?: Date;
  file?: File;
}

export const projectsBudget = [
  {
    id: 1,
    name: '5240 Downs Lane',
    type: 'Kitchen remodelling',
    budgetTarget: 17000,
    currency: 'USD',
    spended: 16000,
    spendedPercentage: 94
  },
  {
    id: 2,
    name: '568 Matt Lane',
    type: 'Stairs remodelling',
    budgetTarget: 3500,
    currency: 'USD',
    spended: 1000,
    spendedPercentage: 28
  }
] 


