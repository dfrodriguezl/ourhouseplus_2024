export enum Parameters {
  Terrain = '3847e53d-d31c-42f6-b595-66ecb574df28',
  Custom = '6169b442-5afb-4369-997d-0ff1cfaf6c08',
  Regen = 'bb4dabce-cad9-4395-a979-af2cca882dad',
  Density = 'f6bb5ae7-2791-40cd-aa25-107abc184a39',
  Area = '84ef3237-3b16-4107-a2aa-933d17092dc9',
  NumberStreetFloors = 'ecf9439d-5222-4562-bc7f-78a9ca8f69e1',
  MaxPrimaryFloors = '7b9b0ea4-8af0-4f4f-a741-c0e9d16ebd5f',
  MaxSecondaryFloors = 'f50dfe07-0496-4a24-b2b0-453d265074b2',
}

export enum ParametersStep2 {
  Terrain = '3847e53d-d31c-42f6-b595-66ecb574df28',
  Custom = '6169b442-5afb-4369-997d-0ff1cfaf6c08',
  Regen = 'bb4dabce-cad9-4395-a979-af2cca882dad',
  Density = 'f6bb5ae7-2791-40cd-aa25-107abc184a39',
  Area = '84ef3237-3b16-4107-a2aa-933d17092dc9',
  WindowPercentage = 'ad3099f7-70fc-44a7-a5a8-3b0a4cb65a88',
  FacadeDirection = '465fd15b-113e-48d9-8fc0-77bab082667b',
  NumberStreetFloors = 'ecf9439d-5222-4562-bc7f-78a9ca8f69e1',
  MaxSecondaryFloors = 'a0e9b44c-5131-441a-bf9b-5bd587f478ba',
}

export interface ShapeDiverParams {
  terrain: string | '0' | '1' | '2';
  density: string | '0' | '1' | '2' | undefined;
  unitType: number;
  regen: number;
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
