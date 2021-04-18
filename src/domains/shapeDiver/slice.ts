import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { SearchParams } from 'domains/core/models';
import { AdvancedOptions, ShapeDiverOptions, ShapeDiverParams } from 'domains/shapeDiver/models';
import { Location } from 'domains/core/models';

export interface ShapeDiverState {
  area: number;
  location: Location | undefined;
  terrain: string | undefined;
  density: number;
  regen: number;
  unitType: number;
  options: ShapeDiverOptions | undefined;
  windowPercent: number;
  facadeDirection: number;
}

const initialState: ShapeDiverState = {
  area: 50,
  location: undefined,
  terrain: undefined,
  density: 0,
  regen: 0,
  unitType: 1,
  options: undefined,
  windowPercent: 70,
  facadeDirection: 0,
};

export const shapeDiverSlice = createSlice({
  name: 'shapediver',
  initialState,
  reducers: {
    doUpdateTerrain: (state, action: PayloadAction<string>) => {
      state.terrain = action.payload;
    },
    setInitialParams: (state, action: PayloadAction<SearchParams>) => {
      state.area = action.payload.area;
      state.density = action.payload.density.value;
      state.location = action.payload.location;
      state.regen = state.location!.regen;
    },
    setParams: (state, action: PayloadAction<ShapeDiverParams>) => {
      state.terrain = action.payload.terrain;
      state.unitType = action.payload.unitType;
    },
    setDensity: (state, action: PayloadAction<number>) => {
      state.density = action.payload;
    },
    setLocation: (state, action: PayloadAction<Location>) => {
      state.location = action.payload;
    },
    setAdvancedOptions: (state, action: PayloadAction<AdvancedOptions>) => {
      state.location!.maxPriFloors = action.payload.maxPriFloors;
      state.location!.maxSecFloors = action.payload.maxSecFloors;
      state.location!.streetFloors = action.payload.streetFloors;
    },
    setWindow: (state, action: PayloadAction<number>) => {
      state.location!.windowPercentage = action.payload;
    },
    setFacadeDirection: (state, action: PayloadAction<number>) => {
      state.facadeDirection = action.payload;
    },
    setFlatSize: (state, action: PayloadAction<number>) => {
      state.location!.flatSize = action.payload;
    },
    setFlatType: (state, action: PayloadAction<number>) => {
      state.location!.flatType = action.payload;
    },
    setOptions: (state, action: PayloadAction<ShapeDiverOptions>) => {
      state.options = action.payload;
    },
    setRegen: (state) => {
      state.regen = (state.regen + 1) % state.options!.regen.length;
    },
  },
});

export const {
  doUpdateTerrain,
  setParams,
  setOptions,
  setInitialParams,
  setDensity,
  setWindow,
  setAdvancedOptions,
  setFacadeDirection,
  setRegen,
  setFlatSize,
  setFlatType,
} = shapeDiverSlice.actions;

export const getArea = (state: RootState) => state.domains.shapediver.area;

export default shapeDiverSlice.reducer;
