import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { get } from 'app/api';
import { AppThunk } from 'app/store';
import { AxiosResponse } from 'axios';
import { SearchParams, Location, Density } from './models';

interface CoreState {
  location: Location | undefined;
  density: Density | undefined;
  locations: Location[];
}

const initialState: CoreState = {
  location: undefined,
  density: undefined,
  locations: []
};

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    doSearch: (state, action: PayloadAction<SearchParams>) => {
      const { location, density } = action.payload;
      state.location = location;
      state.density = density;
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
