import { image_1, image_2 } from 'assets';


export interface Project {
  idProject?: string;
  name: string;
  location: string;
  deliveryDueDate: string;
  picture?: any;
  livingRoom?: boolean;
  livingRoomNumber?: number;
  dinningRoom?: boolean;
  bedRoom?: boolean;
  bedRoomNumber?: number;
  toilet?: boolean;
  toiletNumber?: number;
  projectStyle?: string;
  user?: string;
  rooms?: Room[];
}

export interface Room {
  type: string;
  order: string;
  name: string;
  total: number;
  furnitures?: Item[];
}

export interface Item {
  type: string;
  price: number;
  url_image?: string;
  quantity: number;
  avg_size?: number;
}

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

export const projects: Project[] = [
  {
    name: 'I04 WOOSTER STREET',
    location: 'NY - USA',
    deliveryDueDate: '2023-01-01',
    picture: image_1
  },
  {
    name: '4546 DOWNS LANE ST',
    location: 'ASPEN - USA',
    deliveryDueDate: '2023-01-01',
    picture: image_2
  }
]

export const dinningRoomsFurniture: Item[] = [
  {
    type: 'Dinning table',
    price: 0,
    quantity: 1
  },
  {
    type: 'Dinning chairs',
    price: 0,
    quantity: 8
  },
  {
    type: 'Suspention',
    price: 0,
    quantity: 1
  },
  {
    type: 'Console',
    price: 0,
    quantity: 1
  }
]

export const livingRoomsFurniture: Item[] = [
  {
    type: 'Sofa',
    price: 0,
    quantity: 1
  },
  {
    type: 'Arm Chairs',
    price: 0,
    quantity: 2
  },
  {
    type: 'Coffee table',
    price: 0,
    quantity: 1
  },
  {
    type: 'Big sidetable',
    price: 0,
    quantity: 1
  },
  {
    type: 'Small side table',
    price: 0,
    quantity: 2
  },
  {
    type: 'Reading lamp',
    price: 0,
    quantity: 1
  },
  {
    type: 'Floor lamp',
    price: 0,
    quantity: 2
  },
  {
    type: 'Rug',
    price: 0,
    quantity: 2
  }
]

export const toiletFurniture: Item[] = [
  {
    type: 'Lavoratory sink',
    price: 0,
    quantity: 1
  },
  {
    type: 'Lavoratory fauset',
    price: 0,
    quantity: 2
  },
  {
    type: 'Mirror',
    price: 0,
    quantity: 1
  },
  {
    type: 'Wall lights',
    price: 0,
    quantity: 2
  },
  {
    type: 'Toilet',
    price: 0,
    quantity: 1
  }
]

export const bedroomFurniture: Item[] = [
  {
    type: 'Bed headboard',
    price: 0,
    quantity: 1
  },
  {
    type: 'Bed sommier',
    price: 0,
    quantity: 1
  },
  {
    type: 'Rug',
    price: 0,
    quantity: 1
  },
  {
    type: 'Side tables',
    price: 0,
    quantity: 2
  },
  {
    type: 'Desk lamps',
    price: 0,
    quantity: 2
  },
  {
    type: 'Console',
    price: 0,
    quantity: 1
  }
]

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

export interface ProjectBudget {
  id: number;
  name: string;
  type: string;
  budgetTarget: number;
  currency: string;
  spended: number;
  spendedPercentage: number;
  email?: string;
  spends?: Spend[],
  dateStart?: Date;
}

export interface ImgBudget {
  date?: Date;
  file?: File;
}

export interface Spend {
  date?: Date;
  detail?: string;
  quantity?: number;
  file?: string;
  type?: number;
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

export const types = [
  'Chair',
  'Desk',
  'Library',
  'Table',
  'Lounge Chair',
  'Coffee Table',
  'Side Table',
  'Bench',
  'Sofa',
  'Bedside',
  'Wall light',
  'Console',
  'Lamp'
]


