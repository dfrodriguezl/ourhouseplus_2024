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
  FlatSize = 'FLAT SIZE',
  FloorSelection = 'FLOOR SECTION SELECTION',
  RoomType = 'ROOM TYPE',
  UnitsNumberType = 'UNITS NUMBER TYPE'
}

export enum DataParameters {
  TotalGrossFloorArea = 'DATA-TOTAL (m2) - Gross Floor Area',
  LandUserRatio = 'DATA-(FAR)-Land User Ratio',
  FloorAreaRatio = 'DATA-(FAR)-Floor Area Ratio',
  TotalHousingUnits = 'DATA-TOTAL (nbr) - Housing Units',
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

export interface ModelData {
  totalGrossFloorArea: number;
  landUserRatio: number;
  floorAreaRatio: number;
  totalHousingUnits: number;
}
