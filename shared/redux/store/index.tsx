import { configureStore } from '@reduxjs/toolkit';

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
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(...additionalMiddlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
