export interface SearchParams {
  location: Location | undefined;
  area: number;
  urbanism: string;
}

export interface Location {
  id: number;
  city: string;
  floors: number;
  description: string;
}

