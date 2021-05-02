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
  GrossLandArea = 'DATA-TOTAL (nbr) - Housing Units',
  TotalGrossFloorArea = 'DATA-TOTAL (m2) - (GFA) Gross Floor Area',
  GrossLeasableArea = 'DATA-(m2)- (GLA) Gross leasable area',
  PlotArea = 'DATA- Plot Ratio',
  DwellingsDensity = 'DATA-(du/ha)- Dwelings Density',
  AverageInhabitantPerDwelling = 'DATA-(nbr)- Average Inhabitant per Dweling',
  AverageBedroomPerDwelling = 'DATA-(hr/du)- Average Bedroom per Dweling',
  GreenSpacePerInhabitant = 'DATA-(m2)- Green Space per Inhabitant',
  GreenSpaceDensity = 'DATA-(%)- Green Space Density',
  RoadDensity = 'DATA-(%)- Road Density',
  LandUserRatio = 'DATA- (LUR) Land User Ratio',
  FloorAreaRatio = 'DATA- (FAR) Floor Area Ratio',
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
  totalLandArea: number;
  totalGrossFloorArea: number;
  totalGrossLeasableArea: number;
  floorAreaRatio: number;
  landUserRatio: number;
  plotRatio: number;
  totalHousingUnits: number;
  dwellingsDensity: number;
  averageInhabitantPerDwelling: number;
  averageBedroomPerDwelling: number;
  greenSpacePerInhabitant: number;
  greenSpaceDensity: number;
  roadDensity: number;

}
