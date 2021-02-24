export enum Parameters {
  Terrain = '3847e53d-d31c-42f6-b595-66ecb574df28',
  Custom = '6169b442-5afb-4369-997d-0ff1cfaf6c08',
  Regen = 'bb4dabce-cad9-4395-a979-af2cca882dad',
  Density = 'e253b8f5-1114-4210-a525-0f9edbf41cc4',
  Area = '84ef3237-3b16-4107-a2aa-933d17092dc9'
}

export interface ShapeDiverParams {
  terrain: string | '0' | '1' | '2' ;
  density: string | '0' | '1' | '2';
  unitType: number;
  regen: number;
}

export interface ShapeDiverOptions {
  terrain: string[];
  regen: string[];

}
