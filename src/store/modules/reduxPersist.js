import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'NOME-DA-APLICACAO',
      storage,
      whitelist: ['exampleReducer'],
    },
    reducers
  );

  return persistedReducers;
};
