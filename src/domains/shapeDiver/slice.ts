import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    doUpdateTerrain: {
      reducer(state, action: PayloadAction<string>) {
        state.terrain = action.payload;
      },
      prepare(payload: string) {
        return {
          payload
        }
      }
    },
    setParams: {
      reducer(state, action: PayloadAction<ShapeDiverParams>) {
        state.density = action.payload.density;
        state.terrain = action.payload.terrain;
        state.unitType = action.payload.unitType;
        state.regen = action.payload.regen;
      },
      prepare(payload: ShapeDiverParams) {
        return {
          payload
        }
      }
    },
    setOptions: {
      reducer(state, action: PayloadAction<ShapeDiverOptions>) {
        state.options = action.payload;
      },
      prepare(payload: ShapeDiverOptions) {
        return {
          payload
        }
      }
    }
  },
});

export const {
  doUpdateTerrain,
  setParams,
  setOptions
} = shapeDiverSlice.actions;

export default shapeDiverSlice.reducer;
