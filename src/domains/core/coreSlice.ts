import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project } from './models';
import { RootState } from 'app/store';

interface CoreState {
  currentProject: Project | undefined;
  projects: Project[];
}

const initialState: CoreState = {
  currentProject: undefined,
  projects: []
};

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    setCurrentProject: (state, action: PayloadAction<Project>) => {
      state.currentProject = action.payload;
    },
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    }
  },
});

export const {
  setCurrentProject,
  setProjects
} = coreSlice.actions;

export const currentProject = (state: RootState) => state.currentProject;

export default coreSlice.reducer;
