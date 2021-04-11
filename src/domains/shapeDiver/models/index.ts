export enum Parameters {
  Area = 'AREA',
  Terrain = 'LAND SHAPE',
  Regen = 'REGEN',
  Density = 'DENSITY',
  NumberStreetFloors = 'NBR STREET FLOORS',
  MaxPrimaryFloors = 'MAX NBR PRIMARY FLOORS',
  MaxSecondaryFloors = 'MAX NBR SECONDARY FLOORS',
  WindowPercentage = 'WINDOW PERCENTAGE',
  FacadeDirection = 'FACADE DIRECTION',
  Annotation = 'ANNOTATION',
}

export interface ShapeDiverParams {
  terrain: string | '0' | '1' | '2';
  unitType: number;
}

export interface ShapeDiverOptions {
  terrain: string[];
  regen: string[];
}

export interface AdvancedOptions {
  maxPriFloors: number;
  maxSecFloors: number;
  streetFloors: number;
}
