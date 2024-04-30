import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item, Project, Room } from './models';
import { RootState } from 'app/store';

interface CoreState {
  currentProject: Project | undefined;
  projects: Project[];
  currentRoom: Room | undefined;
  currentItem: Item | undefined;
}

const initialState: CoreState = {
  currentProject: undefined,
  projects: [],
  currentRoom: undefined,
  currentItem: undefined
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
    setCurrentItem: (state, action: PayloadAction<Item>) => {
      state.currentItem = action.payload;
    },
  },
});

export const {
  setCurrentProject,
  setProjects,
  setCurrentRoom,
  setCurrentItem
} = coreSlice.actions;

export const currentProject = (state: RootState) => state.currentProject;

export default coreSlice.reducer;
