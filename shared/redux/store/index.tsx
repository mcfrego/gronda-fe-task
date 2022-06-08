import { configureStore } from '@reduxjs/toolkit';

import { creationApi } from '../services/api';
import { appSlice } from '../slices/app';

let additionalMiddlewares = new Array();
if (__DEV__) {
  const logger = require('redux-logger');
  const loggerMiddleware = logger.createLogger({
    duration: true,
  });
  additionalMiddlewares = [loggerMiddleware];
}

export const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
    [creationApi.reducerPath]: creationApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(creationApi.middleware)
      .concat(...additionalMiddlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
