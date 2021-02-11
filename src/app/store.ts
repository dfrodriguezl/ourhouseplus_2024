import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rootReducers from 'app/rootReducers';

export const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

if ((module as any).hot) {
  (module as any).hot.accept('./rootReducers', () => {
    const nextReducer = require('./rootReducers').default;
    store.replaceReducer(nextReducer);
  });
}
