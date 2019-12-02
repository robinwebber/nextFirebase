import { createStore, applyMiddleware, Reducer, Store } from "redux";
import createSagaMiddleware, { Task } from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { AppState } from "./reducers";
import { rootSaga } from "./sagas";

export interface IStoreType extends Store {
  sagaTask?: Task;
}

const makeStore = (reducer: Reducer, initialState: AppState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [];
  middlewares.push(sagaMiddleware);

  const store: IStoreType = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default (reducer: Reducer, initialState: AppState) => {
  const store: IStoreType = makeStore(rootReducer, initialState);
  return store;
};
