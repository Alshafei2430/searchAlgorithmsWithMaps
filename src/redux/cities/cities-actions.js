import citiesTypes from "./cities-types";

export const getCities = () => ({
    type: citiesTypes.GET_CITIES,
})

export const setCities = (cities) => ({
    type: citiesTypes.SET_CITIES,
    payload: cities,
})

export const getPathCities = (payload) => ({
    type: citiesTypes.GET_PATH_CITIES,
    payload: payload,
})

export const setPathCities = (pathCities) => ({
    type: citiesTypes.SET_PATH_CITIES,
    payload: pathCities,
})