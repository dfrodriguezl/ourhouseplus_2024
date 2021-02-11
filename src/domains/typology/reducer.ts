import { PayloadAction } from '@reduxjs/toolkit';
import * as actionTypes from 'domains/typology/actionsTypes';

export interface State {
  location: string | undefined;
  area: number;
  urbanism: number;
  isSearching: boolean;
}

export const initialState: State = {
  location: undefined,
  area: 0,
  urbanism: 0,
  isSearching: false,
}

export function typologyReducer(state = initialState, action: PayloadAction<any>): State {

  switch (action.type) {
    case actionTypes.UPDATE_LOCATION:
      return {
        ...state,
        location: action.payload,
      }

    case actionTypes.UPDATE_AREA:
      return {
        ...state,
        area: action.payload,
      }

    case actionTypes.UPDATE_URBANISM:
      return {
        ...state,
        urbanism: action.payload
      }


    default:
      return state;
  }
}
