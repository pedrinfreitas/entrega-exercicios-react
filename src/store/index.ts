import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { playlist } from './reducers/playlist.reducer';

export const store = configureStore({
  reducer: combineReducers({ playlist }),
});
