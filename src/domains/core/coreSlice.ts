import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { get, post } from 'app/api';
import { AppThunk } from 'app/store';
import { AxiosResponse } from 'axios';
import { LocationSimple, Density, Location, Terrain, ProjectBudget } from './models';

interface CoreState {
  location: LocationSimple | undefined;
  density: Density | undefined;
  locations: Location[];
  searchClick: Boolean;
  terrain: Terrain | undefined;
  option: string;
  projectsBudget: ProjectBudget[] | undefined;
  saveSuccess: boolean | undefined;
}

const initialState: CoreState = {
  location: undefined,
  density: undefined,
  locations: [],
  searchClick: false,
  terrain: undefined,
  option: '',
  projectsBudget: undefined,
  saveSuccess: undefined
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
    saveTerrain: (state, action: PayloadAction<Terrain>) => {
      state.terrain = action.payload;
    },
    setOption: (state, action: PayloadAction<string>) => {
      state.option = action.payload;
    },
    setProjectsBudget: (state, action: PayloadAction<ProjectBudget[]>) => {
      state.projectsBudget = action.payload;
    },
    setSaveSuccess: (state, action: PayloadAction<boolean>) => {
      state.saveSuccess = action.payload;
    }
  },
});

export const {
  setLocations,
  // doSearch,
  setSearchClick,
  saveTerrain,
  setOption,
  setProjectsBudget,
  setSaveSuccess
} = coreSlice.actions;

export const getLocations = (): AppThunk => dispatch => {
  get('/Location').then((data: AxiosResponse<Location[]>) => {
    dispatch(setLocations(data.data))
  });
};


export const getProjectsBudget = (username: string): AppThunk => dispatch => {
  get(`/LoadProjectsBudgetByUsername?username=${username}`).then((data: AxiosResponse<ProjectBudget[]>) => {
    dispatch(setProjectsBudget(data.data))
  });
};

export const saveProjectBudget = (project: ProjectBudget): AppThunk => dispatch => {
  post('/SaveProjectBudget', { data: project }).then((data: AxiosResponse) => {
    dispatch(setSaveSuccess(data.data.message === "Success" ? true : false))
  });
};

export default coreSlice.reducer;
