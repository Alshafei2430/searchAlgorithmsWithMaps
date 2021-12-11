export const handleGetCities = async () => {
    const response = await fetch('https://algorithms-api.herokuapp.com/cities')
    .then(response => response.json())
    .then(({data: citiesList}) => citiesList)
    return response
}

export const handleGetPathCities = async (payload) => {
    const {algo, endCity, startCity} = payload
    const response = await fetch(`https://algorithms-api.herokuapp.com/${algo}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "algo": algo,
                'startCity': startCity,
                'endCity': endCity,
            })
        })
        const PathCities = await response.json()
        .then(({data: pathCities}) => pathCities)
    return PathCities
}