import { combineReducers } from 'redux';
import homeReducer from './slices/homeSlice'
import profileReducer from './slices/profileSlice'

export const rootReducer = combineReducers({
  home: homeReducer,
  profile: profileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
