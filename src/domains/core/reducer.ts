import { PayloadAction } from '@reduxjs/toolkit';
import * as actionTypes from 'domains/core/actionTypes';

export interface State {
  isLoggingIn: boolean;
  isSearching: boolean;
}

export const initialState: State = {
  isLoggingIn: false,
  isSearching: false,
}

export function typologyReducer(state = initialState, action: PayloadAction<any>): State {

  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isLoggingIn: true
      }

    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoggingIn: false
      }

    case actionTypes.SEARCH:
      return {
        ...state,
        isSearching: true
      }

    case actionTypes.SEARCH_FAIL:
    case actionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        isSearching: false
      }
    default:
      return state;
  }
}
