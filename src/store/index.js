import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/slice";
import activeUserReducer from "./activeUser/slice";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    activeUser: activeUserReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

for (const saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}

export default store;