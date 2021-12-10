import {createContext} from 'react';

const ObjectContext = createContext({
    object: {
        'startCity': '',
        'endCity': '',
        'algo': ''
    },
    setPathCities: () => {}
})

export default ObjectContext;