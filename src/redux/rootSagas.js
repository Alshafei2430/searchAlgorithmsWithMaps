import { all, call } from "redux-saga/effects";
import citiesSagas from "./cities/cities-sagas";

export default function* rootSaga() {
  yield all([call(citiesSagas)]);
}