import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project, Room } from './models';
import { RootState } from 'app/store';

interface CoreState {
  currentProject: Project | undefined;
  projects: Project[];
  currentRoom: Room | undefined;
}

const initialState: CoreState = {
  currentProject: undefined,
  projects: [],
  currentRoom: undefined
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
    },
    setCurrentRoom: (state, action: PayloadAction<Room>) => {
      state.currentRoom = action.payload;
    },
  },
});

export const {
  setCurrentProject,
  setProjects,
  setCurrentRoom
} = coreSlice.actions;

export const currentProject = (state: RootState) => state.currentProject;

export default coreSlice.reducer;
