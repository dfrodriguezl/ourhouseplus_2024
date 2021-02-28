import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { get } from 'app/api';
import { AppThunk } from 'app/store';
import { AxiosResponse } from 'axios';
import { SearchParams, Location } from './models';

interface CoreState {
  location: Location | undefined;
  area: number;
  urbanism: string | undefined;
  locations: Location[];
}

const initialState: CoreState = {
  location: undefined,
  area: 50,
  urbanism: undefined,
  locations: [
    {
      id: 1,
      city: 'Bogota',
      floors: 15,
      description: 'Avg heigh 15 floors'
    },
    {
      id: 2,
      city: 'Jakarta',
      floors: 7,
      description: 'Avg. Height 7 floors'
    },
    {
      id: 3,
      city: 'New York',
      floors: 50,
      description: 'Avg. Height 50 floors'
    },
    {
      id: 4,
      city: 'Paris',
      floors: 7,
      description: 'Avg. Height 7 floors'
    },
    {
      id: 5,
      city: 'Cartagena',
      floors: 30,
      description: 'Avg. Height 30 floors'
    }
  ]
};

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    doSearch: (state, action: PayloadAction<SearchParams>) => {
      const { area, location, urbanism } = action.payload;
      state.area = area;
      state.location = location;
      state.urbanism = urbanism;
    },
    setLocations: (state, action: PayloadAction<Location[]>) => {
      state.locations = action.payload;
    }
  },
});

export const {
  setLocations,
  doSearch,
} = coreSlice.actions;

export const getLocations = (): AppThunk => dispatch => {
  get('/Location').then((data: AxiosResponse<Location[]>) => {
    dispatch(setLocations(data.data))
  });
};

export default coreSlice.reducer;
