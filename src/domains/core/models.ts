export interface SearchParams {
  location: string;
  area: number;
  urbanism: string;
}

export interface ShapeDiverParams {
  terrain: string | '1:1' | '2:1' | 'custom';
  density: number;
  unitType: number;
}
