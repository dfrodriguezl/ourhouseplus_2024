import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ShapeDiverOptions, ShapeDiverParams } from 'domains/shapeDiver/models';

export interface ShapeDiverState {
  terrain: string | undefined;
  density: string | undefined;
  regen: number | undefined;
  unitType: number;
  options: ShapeDiverOptions | undefined;
}

const initialState: ShapeDiverState = {
  terrain: undefined,
  density: undefined,
  regen: undefined,
  unitType: 1,
  options: undefined,
};

export const shapeDiverSlice = createSlice({
  name: 'shapediver',
  initialState,
  reducers: {
    doUpdateTerrain: (state, action: PayloadAction<string>) => {
      state.terrain = action.payload;
    },
    setParams: (state, action: PayloadAction<ShapeDiverParams>) => {
      state.density = action.payload.density;
      state.terrain = action.payload.terrain;
      state.unitType = action.payload.unitType;
      state.regen = action.payload.regen;
    },
    setOptions: (state, action: PayloadAction<ShapeDiverOptions>) => {
      state.options = action.payload;
    }
  },
});

export const {
  doUpdateTerrain,
  setParams,
  setOptions
} = shapeDiverSlice.actions;

export const getArea = (state: RootState) => state.domains.core.area;

export default shapeDiverSlice.reducer;
