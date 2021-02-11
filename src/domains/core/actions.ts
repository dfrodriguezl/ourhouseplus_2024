import { PayloadAction } from '@reduxjs/toolkit';
import * as actionTypes from 'domains/core/actionTypes';
import { SearchParams } from './models';

export const doSearch = (payload: SearchParams): PayloadAction<SearchParams> => {
  return {
    type: actionTypes.SEARCH,
    payload
  }
}
