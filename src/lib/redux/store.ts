import { Store } from "redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware, { Task } from "redux-saga";
import { fork, all } from "redux-saga/effects";
import userReducer from "./user/reducers";
import userSagas from "../../api/userSagas";
import { logger } from "./middleware";

const rootReducer = combineReducers({
  user: userReducer,
});

function* rootSaga() {
  yield all([fork(userSagas)]);
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
  devTools: process.env.NODE_ENV !== "production",
});

export interface SagaStore extends Store {
  sagaTask?: Task;
}

(store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

const appState = () => store.getState();
const appDispatch = (action: any | unknown): any => store.dispatch(action);

/* Types */

export type RootStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;

export { store, appState, appDispatch };
