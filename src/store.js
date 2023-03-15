import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import appReducer from "./appSlice";
import rootSaga from "./rootSaga";

const sagaMiddldeware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: [sagaMiddldeware],
});

sagaMiddldeware.run(rootSaga);

export default store;
