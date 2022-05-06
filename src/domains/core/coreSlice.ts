import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { get, post } from 'app/api';
import { AppThunk } from 'app/store';
import { AxiosResponse } from 'axios';
import { LocationSimple, Density, Location, Terrain, ProjectBudget, Spend } from './models';

interface CoreState {
  location: LocationSimple | undefined;
  density: Density | undefined;
  locations: Location[];
  searchClick: Boolean;
  terrain: Terrain | undefined;
  option: string;
  projectsBudget: ProjectBudget[] | undefined;
  saveSuccess: boolean | undefined;
  currentProject: ProjectBudget | undefined;
}

const initialState: CoreState = {
  location: undefined,
  density: undefined,
  locations: [],
  searchClick: false,
  terrain: undefined,
  option: '',
  projectsBudget: undefined,
  saveSuccess: undefined,
  currentProject: undefined
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
    },
    setCurrentProject: (state, action: PayloadAction<ProjectBudget>) => {
      state.currentProject = action.payload;
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
  setSaveSuccess,
  setCurrentProject
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

export const editProjectBudget = (id: string, project: ProjectBudget): AppThunk => dispatch => {
  post(`/EditProjectBudgetById?id=${id}`, { data: project }).then((data: AxiosResponse) => {
    dispatch(setCurrentProject(data.data))
  });
};

export const sendEmail = (formData: FormData): AppThunk => dispatch => {
  post('/SendEmail', { data: formData }).then((data: AxiosResponse) => {
    dispatch(setSaveSuccess(data.data.message === "Success" ? true : false));
    console.log("Email sent!!!")
  });
};

export default coreSlice.reducer;
