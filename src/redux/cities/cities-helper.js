export const handleGetCities = async () => {
    const response = await fetch('http://localhost:5000/cities')
    .then(response => response.json())
    .then(({data: citiesList}) => citiesList)
    return response
}

export const handleGetPathCities = async (payload) => {
    const {algo, endCity, startCity} = payload
    const response = await fetch(`http://localhost:5000/${algo}`, {
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