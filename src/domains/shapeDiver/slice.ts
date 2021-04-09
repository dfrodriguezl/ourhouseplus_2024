import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { SearchParams } from 'domains/core/models';
import { AdvancedOptions, ShapeDiverOptions, ShapeDiverParams } from 'domains/shapeDiver/models';
import { Location } from 'domains/core/models';

export interface ShapeDiverState {
  area: number;
  location: Location | undefined;
  terrain: string | undefined;
  density: string | undefined;
  regen: number | undefined;
  unitType: number;
  options: ShapeDiverOptions | undefined;
  windowPercent: number;
}

const initialState: ShapeDiverState = {
  area: 50,
  location: undefined,
  terrain: undefined,
  density: undefined,
  regen: undefined,
  unitType: 1,
  options: undefined,
  windowPercent: 70,
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
      state.location = action.payload.location;
      state.density = action.payload.density.value;
    },
    setParams: (state, action: PayloadAction<ShapeDiverParams>) => {
      state.density = action.payload.density;
      state.terrain = action.payload.terrain;
      state.unitType = action.payload.unitType;
      state.regen = action.payload.regen;
    },
    setDensity: (state, action: PayloadAction<string>) => {
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
      state.windowPercent = action.payload;
    },
    setOptions: (state, action: PayloadAction<ShapeDiverOptions>) => {
      state.options = action.payload;
    }
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
} = shapeDiverSlice.actions;

export const getArea = (state: RootState) => state.domains.shapediver.area;

export default shapeDiverSlice.reducer;
