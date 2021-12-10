import { takeLatest, call, all, put } from "redux-saga/effects";
import {handleGetCities, handleGetPathCities} from './cities-helper'
import citiesTypes from "./cities-types";

import {setCities, setPathCities} from './cities-actions'

export function* getCities() {
    const cities = yield handleGetCities()
    yield put(setCities(cities))
}

export function* onGetCitiesStart() {
    yield takeLatest(citiesTypes.GET_CITIES, getCities)
}

export function* getPathCities({payload}) {
    console.log({...payload})
    const pathCities = yield handleGetPathCities(payload)
    yield put(setPathCities(pathCities))
}

export function* onGetPathCitiesStart() {
    yield takeLatest(citiesTypes.GET_PATH_CITIES, getPathCities)
}

export default function* citiesSagas() {
    yield all([
        call(onGetCitiesStart),
        call(onGetPathCitiesStart)
    ])
}