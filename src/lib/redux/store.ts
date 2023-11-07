import { Store } from "redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { REHYDRATE } from "redux-persist/lib/constants";
import createSagaMiddleware, { Task } from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { fork, all, take } from "redux-saga/effects";
import userReducer from "./user/reducers";
import userSagas from "../../api/userSagas";
import { logger } from "./middleware";

const rootReducer = combineReducers({
  user: userReducer,
});

function* rootSaga() {
  console.log("Waiting for rehydration");
  yield take(REHYDRATE); // Wait for rehydrate to prevent sagas from running with empty store
  console.log("Rehydrated");
  yield all([fork(userSagas)]);
}

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
  devTools: process.env.NODE_ENV !== "production",
});


export interface SagaStore extends Store {
  sagaTask?: Task;
}

(store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

const appState = () => store.getState();
const appDispatch = (action: any | unknown): any => store.dispatch(action);

/* Types */

export type RootStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;

export { store, persistor, appState, appDispatch };
