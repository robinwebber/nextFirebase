import { createStore, applyMiddleware, Reducer, Store } from "redux";
import createSagaMiddleware, { Task } from "redux-saga";
import { persistReducer, persistStore, Persistor } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { AppState } from "./reducers";
import { rootSaga } from "./sagas";
import thunkMiddleWare from "redux-thunk"; //----- temporary fix replace all with saga

export interface IStoreType extends Store {
  sagaTask?: Task;
  persistor?: Persistor;
}

const makeStore = (
  reducer: Reducer,
  initialState: AppState,
  isServer: boolean
) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [];
  middlewares.push(sagaMiddleware);
  middlewares.push(thunkMiddleWare); //----- remove and replace all with saga

  const store: IStoreType = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default (
  initialState: AppState,
  { isServer }: { isServer: boolean }
) => {
  // Do not persist on server
  if (isServer) {
    initialState = initialState || {};
    return makeStore(rootReducer, initialState, isServer);
  }

  const persistConfig = {
    key: "root",
    // whitelist: [],
    storage
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store: IStoreType = makeStore(persistedReducer, initialState, isServer);
  return store;
};
