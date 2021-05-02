import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { SearchParams } from 'domains/core/models';
import { AdvancedOptions, ModelData, ShapeDiverOptions } from 'domains/shapeDiver/models';
import { Location } from 'domains/core/models';

export interface ShapeDiverState {
  area: number;
  location: Location | undefined;
  terrain: number;
  options: ShapeDiverOptions | undefined;
  facadeDirection: number;
  roomType: number;
  floorSelectionOptions: string[];
  floorSelection: number;
  modelData: ModelData;
}

const initialState: ShapeDiverState = {
  area: 1,
  location: undefined,
  terrain: 1, // Rect
  options: undefined,
  facadeDirection: 0,
  roomType: 2,
  floorSelectionOptions: [],
  floorSelection: 0,
  modelData: {
    floorAreaRatio: 0,
    landUserRatio: 0,
    totalGrossFloorArea: 0,
    totalHousingUnits: 0,
    averageBedroomPerDwelling: 0,
    averageInhabitantPerDwelling: 0,
    dwellingsDensity: 0,
    greenSpaceDensity: 0,
    greenSpacePerInhabitant: 0,
    plotRatio: 0,
    roadDensity: 0,
    totalGrossLeasableArea: 0,
    totalLandArea: 0,
  }
};

export const shapeDiverSlice = createSlice({
  name: 'shapediver',
  initialState,
  reducers: {
    setInitialParams: (state, action: PayloadAction<SearchParams>) => {
      state.area = action.payload.area;
      state.location = action.payload.location;
    },
    setTerrain: (state, action: PayloadAction<number>) => {
      state.terrain = action.payload;
    },
    setDensity: (state, action: PayloadAction<number>) => {
      state.location!.density = action.payload;
    },
    setLocation: (state, action: PayloadAction<Location>) => {
      state.location = action.payload;
    },
    setUnitsNumberType: (state, action: PayloadAction<number>) => {
      state.location!.unitsNumberType = action.payload;
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
    setOptions: (state, action: PayloadAction<ShapeDiverOptions>) => {
      state.options = action.payload;
    },
    setRegen: (state) => {
      state.location!.regen = (state.location!.regen + 1) % state.options!.regen.length;
    },
    setRoomType: (state, action: PayloadAction<number>) => {
      state.roomType = action.payload;
    },
    setFloorSelectionOptions: (state, action: PayloadAction<string[]>) => {
      state.floorSelectionOptions = action.payload;
    },
    setFloorSelection: (state, action: PayloadAction<number>) => {
      state.floorSelection = action.payload;
    },
    setModelData: (state, action: PayloadAction<ModelData>) => {
      state.modelData = action.payload;
    },
  },
});

export const {
  setTerrain,
  setOptions,
  setInitialParams,
  setDensity,
  setWindow,
  setAdvancedOptions,
  setFacadeDirection,
  setRegen,
  setFlatSize,
  setUnitsNumberType,
  setRoomType,
  setFloorSelectionOptions,
  setFloorSelection,
  setModelData,
} = shapeDiverSlice.actions;

export const getArea = (state: RootState) => state.domains.shapediver.area;

export default shapeDiverSlice.reducer;
