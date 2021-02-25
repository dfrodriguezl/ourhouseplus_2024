import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { SearchParams, Location } from './models';

interface CoreState {
  location: Location | undefined;
  area: number;
  urbanism: string | undefined;
  isSearching: boolean;
  locations: Location[];
}

const initialState: CoreState = {
  location: undefined,
  area: 0,
  urbanism: undefined,
  isSearching: false,
  locations: [
    {
      id: 1,
      city: 'Bogota',
      floors: 15,
      description: 'Avg heigh 15 floors'
    },
    {
      id: 2,
      city: 'Jakarta',
      floors: 7,
      description: 'Avg. Height 7 floors'
    },
    {
      id: 3,
      city: 'New York',
      floors: 50,
      description: 'Avg. Height 50 floors'
    },
    {
      id: 4,
      city: 'Paris',
      floors: 7,
      description: 'Avg. Height 7 floors'
    },
    {
      id: 5,
      city: 'Cartagena',
      floors: 30,
      description: 'Avg. Height 30 floors'
    }
  ]
};

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
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
    }
  },
});

export const {
  doSearch,
  doSearchFailed,
  doSearchSuccess,
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
