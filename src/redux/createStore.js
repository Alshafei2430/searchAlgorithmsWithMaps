import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddle from "redux-saga";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSagas";
const sagaMiddleware = createSagaMiddle();

export const middlewares = [thunk, sagaMiddleware, logger];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);


sagaMiddleware.run(rootSaga);

const stores = { store };

export default stores;