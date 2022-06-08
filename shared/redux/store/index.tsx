import { configureStore } from '@reduxjs/toolkit';

import reducers from '../reducers';

/**
 * Custom middle ware implementations
 */
// import { logger } from '../middlewares/logger';

let additionalMiddlewares = new Array();
if (__DEV__) {
  const logger = require('redux-logger');
  const loggerMiddleware = logger.createLogger({
    duration: true,
  });
  additionalMiddlewares = [loggerMiddleware];
}
const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(...additionalMiddlewares),
});

/**
 * Add custom middlewares
 * They are executed in the order they are registered here
 */
// const store = createStore(reducers, applyMiddleware(...middlewares, logger));

export type AppDispatch = typeof store.dispatch;

export default store;
