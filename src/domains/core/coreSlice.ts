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
  locations: []
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
