import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState) {
  const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(...middlewares));

  const persistor = persistStore(store);

  return { store, persistor };
}
