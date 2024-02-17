import { combineReducers } from '@reduxjs/toolkit';
import coreReducer from 'domains/core/coreSlice';

export default combineReducers({
  domains: combineReducers({
    core: coreReducer
  })
});
