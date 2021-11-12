import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { get } from 'app/api';
import { AppThunk } from 'app/store';
import { AxiosResponse } from 'axios';
import { LocationSimple, Density, Location } from './models';

interface CoreState {
  location: LocationSimple | undefined;
  density: Density | undefined;
  locations: Location[];
  searchClick: Boolean;
  option: string;
}

const initialState: CoreState = {
  location: undefined,
  density: undefined,
  locations: [],
  searchClick: false,
  option: ''
};

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    // doSearch: (state, action: PayloadAction<SearchParams>) => {
    //   const { location, density } = action.payload;
    //   state.location = location;
    //   state.density = density;
    // },
    setLocations: (state, action: PayloadAction<Location[]>) => {
      state.locations = action.payload;
    },
    setSearchClick: (state, action: PayloadAction<Boolean>) => {
      state.searchClick = action.payload;
    },
    setOption: (state, action: PayloadAction<string>) => {
      state.option = action.payload;
    },
  },
});

export const {
  setLocations,
  // doSearch,
  setSearchClick,
  setOption
} = coreSlice.actions;

export const getLocations = (): AppThunk => dispatch => {
  get('/Location').then((data: AxiosResponse<Location[]>) => {
    dispatch(setLocations(data.data))
  });
};

export default coreSlice.reducer;
