import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { SearchParams, ShapeDiverParams } from 'domains/core/models';

interface CoreState {
  location: string | undefined;
  area: number;
  urbanism: string | undefined;
  isSearching: boolean;
  shapeDiverParams: ShapeDiverParams;
}

const initialState: CoreState = {
  location: undefined,
  area: 0,
  urbanism: undefined,
  isSearching: false,
  shapeDiverParams: {
    density: 1,
    terrain: '1:1',
    unitType: 1,
  }
};

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    updateLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    updateArea: (state, action: PayloadAction<number>) => {
      state.area = action.payload;
    },
    updateUrbanism: (state, action: PayloadAction<string>) => {
      state.urbanism = action.payload;
    },
    doSearch: {
      reducer(state, action: PayloadAction<SearchParams>) {
        const { area, location, urbanism } = action.payload;
        state.area = area;
        state.location = location;
        state.urbanism = urbanism;
        state.isSearching = true;
      },
      prepare(payload: SearchParams) {
        return {
          payload
        }
      }
    },
    doSearchSuccess: (state) => {
      state.isSearching = false;
    },
    doSearchFailed: (state) => {
      state.isSearching = false;
    },
    setShapeDiverParams: (state, action: PayloadAction<ShapeDiverParams>) => {
      state.shapeDiverParams.density = action.payload.density;
      state.shapeDiverParams.terrain = action.payload.terrain;
      state.shapeDiverParams.unitType = action.payload.unitType;
    }
  },
});

export const {
  updateLocation,
  updateArea,
  updateUrbanism,
  doSearch,
  doSearchFailed,
  doSearchSuccess,
  setShapeDiverParams,
} = coreSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount: number): AppThunk => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const isSearchingCount = (state: RootState) => state.domains.core.isSearching;

export default coreSlice.reducer;
