import { LocationSimple } from 'domains/core/models';

export enum Parameters {
  Area = 'AREA',
  Terrain = 'GENERAL-LAND SHAPE',
  Regen = 'REGEN',
  Density = 'GENERAL-DENSITY',
  NumberStreetFloors = 'FLOORS-NBR STREET FLOORS',
  MaxPrimaryFloors = 'FLOORS-MAX NBR PRIMARY FLOORS',
  MaxSecondaryFloors = 'FLOORS-MAX NBR SECONDARY FLOORS',
  WindowPercentage = 'WINDOW PERCENTAGE',
  FacadeDirection = 'FACADE DIRECTION',
  Annotation = 'ANNOTATION',
  FlatSize = 'FLAT SIZE',
  FloorSelection = 'FLOOR SECTION SELECTION',
  RoomType = 'ROOM TYPE',
  UnitsNumberType = 'HOUSING-UNITS ORGANISATION TYPE',
  ImportModel = 'IMPORT DWG',
  AxisSelection = 'ROADS-AXIS SELECTION',
  Typologies = 'GENERAL-TYPOLOGIES',
  EmptySpaceSelection = 'FREE SPACE-NBR EMPTY SPACE SELECTION',
  UndefinedTower = 'FREE SPACE-UNDEFINED TOWER ON/OFF',
  StreetDensity = 'ROADS-BLOCKS SIZE',
  IslandSpacings = 'ROADS-STREET SIZE',
  Density2 = 'DENSITY',
  NumberStreetFloors2 = 'NBR STREET FLOORS',
  MaxPrimaryFloors2 = 'MAX NBR PRIMARY FLOORS',
  MaxSecondaryFloors2 = 'MAX NBR SECONDARY FLOORS',
  FloorsAlignment = 'FLOORS-MAX FLOORS ALIGNEMENT',
  WindowPercentage2 = 'FACADE TYPE',
  BalconyType = 'BALCONY TYPE'
}

export enum DataParameters {
  GrossLandArea = 'DATA-(m2)- Gross Land Area',
  GrossFloorArea = 'DATA-(m2)- (GFA) Gross Floor Area',
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
  Studios = 'DATA- (nbr) - Studio',
  LargeStudios = 'DATA- (nbr) - T1',
  OneBedroom = 'DATA- (nbr) - T2',
  TwoBedroom = 'DATA- (nbr) - T3',
  ThreeBedroom = 'DATA- (nbr) - T4',
  FourBedroom = 'DATA- (nbr) - T5',
  GroundFloorFreeSpace = 'DATA-TOTAL (m2)-Empty Spaces',
  MultipleFloorFreeSpace = 'DATA-TOTAL (m2)-Undefined Tower Space',
  MostHeightBuilding = 'DATA-(m)- Most Height Building',
  LandUserRatioNet = 'DATA- (LUR) (Net) Land User Ratio',
  LandUserRatioGross = 'DATA- (LUR)(Gross) Land User Ratio',
  FloorAreaRatioNet = 'DATA- (FAR) (Net) Floor Area Ratio',
  FloorAreaRatioGross = 'DATA- (FAR)(Gross) Floor Area Ratio',
  PopulationDensity = 'DATA-(r/ha)- Population Density per Hectare',
  RoadDensitym2 = 'DATA-(m2)- Road Density',
  GreenSpaceDensitym2 = 'DATA-(m2)- Green Space Density',
  Studiosm2 = 'DATA- (m2) - Studio',
  StudiosPorc = 'DATA- (%) - Studio',
  LargeStudiosm2 = 'DATA- (m2) - T1',
  LargeStudiosPorc = 'DATA- (%) - T1',
  OneBedroomm2 = 'DATA- (m2) - T2',
  OneBedroomPorc = 'DATA- (%) - T2',
  TwoBedroomm2 = 'DATA- (m2) - T3',
  TwoBedroomPorc = 'DATA- (%) - T3',
  ThreeBedroomm2 = 'DATA- (m2) - T4',
  ThreeBedroomPorc = 'DATA- (%) - T4',
  FourBedroomm2 = 'DATA- (m2) - T5',
  FourBedroomPorc = 'DATA- (%) - T5',
  OneToTwoPorc = 'DATA- (%) - T2T3 LOFT',
  ThreeToFourPorc = 'DATA- (%) - T4T5 LOFT',
}

export interface ShapeDiverOptions {
  terrain: string[];
  regen: string[];
}

export interface AdvancedOptions {
  maxPriFloors: number;
  maxSecFloors: number;
  streetFloors: number;
  axisSelection: number;
  typologies: number;
  emptySpaceSelection: number;
  undefinedTower: number;
  streetDensity: number;
  islandSpacings: number;
  floorsAlignment: number;
  unitsOrganization: number;
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
  studios: number;
  largeStudios: number;
  oneBedroom: number;
  twoBedroom: number;
  threeBedroom: number;
  fourBedroom: number;
  groundFloorFreeSpace: number;
  multipleFloorFreeSpace: number;
  mostHeightBuilding: number;
  landUserRatioNet: number;
  landUserRatioGross: number;
  floorAreaRatioNet: number;
  floorAreaRatioGross: number;
  populationDensity: number;
  roadDensitym2: number;
  greenSpaceDensitym2: number;
  studiosm2: number;
  studiosPorc: number;
  largeStudiosm2: number;
  largeStudiosPorc: number;
  oneBedroomm2: number;
  oneBedroomPorc: number;
  twoBedroomm2: number;
  twoBedroomPorc: number;
  threeBedroomm2: number;
  threeBedroomPorc: number;
  fourBedroomm2: number;
  fourBedroomPorc: number;
  oneToTwoPorc: number;
  threeToFourPorc: number;
}

export interface Project extends ProjectData {
  projectName: string;
  email: string;
  pathTerrain: any | undefined;
}

export interface ProjectData {
  area: number | undefined;
  location: LocationSimple;
  terrain: number | undefined;
  facadeDirection: number | undefined;
  roomType: number | undefined;
  floorSelection: number | undefined;
  modelData: ModelData | undefined;
  coordinates: Coordinates | undefined;
}
export interface Coordinates {
  lat: number | undefined;
  long: number | undefined;
}