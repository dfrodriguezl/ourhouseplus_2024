import { combineReducers } from '@reduxjs/toolkit';
import { typologyReducer } from 'domains/typology/reducer';
import coreReducer from 'domains/core/coreSlice';
import shapeDiverReducer from 'domains/shapeDiver/slice';

export default combineReducers({
  domains: combineReducers({
    core: coreReducer,
    shapediver: shapeDiverReducer,
    typology: typologyReducer,
  })
});
