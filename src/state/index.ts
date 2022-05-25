import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userAPI } from '../services/UserService';
import { postAPI, localPostAPI } from '../services/PostService';
import userReducer from './reducers/UserSlice';

const rootReducer = combineReducers({
  userReducer,
  [postAPI.reducerPath]: postAPI.reducer,
  [localPostAPI.reducerPath]: localPostAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(postAPI.middleware)
        .concat(localPostAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState['dispatch'];
