import { combineReducers } from '@reduxjs/toolkit';
import { typologyReducer } from 'domains/typology/reducer';
import coreReducer from 'domains/core/coreSlice';

export default combineReducers({
  domains: combineReducers({
    core: coreReducer,
    typology: typologyReducer,
  })
});
