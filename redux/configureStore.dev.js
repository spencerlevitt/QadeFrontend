import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from 'react-native';
import logger from 'redux-logger';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

const middlewares = [thunk, reduxImmutableStateInvariant()];

if (process.env.NODE_ENV === 'development') {
  // middlewares.push(logger);
}

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState) {
  // Adding support for redux dev tools in development mode
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)));

  const persistor = persistStore(store);
  
  // USE THIS TO CLEAR PERSISTED STATE
  // clearStorageAndPersistor(persistor);
  

  return { store, persistor };
}

export const clearStorageAndPersistor = (persistor) => {
  console.log('=====================================');
  console.log('CLEARING THE STORAGE AND PERSISTOR');
  console.log('=====================================');
  persistor.purge();
  AsyncStorage.removeItem('root');
}
