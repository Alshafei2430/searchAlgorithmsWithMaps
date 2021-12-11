import citiesTypes from "./cities-types";

const INITIAL_STATE = {
    cities: [],
    pathCities: []
}

const citiesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case citiesTypes.SET_CITIES:
            return {
                ...state,
                cities: action.payload
            }
        case citiesTypes.SET_PATH_CITIES:
            return {
                ...state,
                pathCities: action.payload
            }

        default:
            return state;
    }
}

export default citiesReducer;