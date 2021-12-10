import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const mapState = ({cities}) => ({
    pathCities: cities.pathCities
})

function Map({path}) {
    // const dispatch = useDispatch()
    const {pathCities} = useSelector(mapState)
    const mapContainer = useRef(null);
    const map = useRef(null);
    // const [pathCities, setPathCities] = useState(path)


    const [lng, setLng] = useState(31.23);
    const [lat, setLate] = useState(30.07);
    const [zoom, setZoom] = useState(6.5);
    // const [geojson, setGeojson] = useState({})
    

    // const drawPath = () => {
    //         console.log(pathCities)

    // }

    useEffect(() => {
        console.log(">>>>>>>>>>>>>>>>>>>>>>.")

        // render the map
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        })
        map.current.on('load', () => {
            console.log("1", pathCities)
            if (!map.current.getSource('route')) {
                console.log("2")
                map.current.addSource('route', {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'properties': {},
                        'geometry': {
                            'type': 'LineString',
                            'coordinates': pathCities.map(city => [city.lng, city.lat])
                        }
                    }
                });
            };
            if (!map.current.getLayer('route')) {
                map.current.addLayer({
                    'id': 'route',
                    'type': 'line',
                    'source': 'route',
                    'layout': {
                        'line-join': 'round',
                        'line-cap': 'round'
                    },
                    'paint': {
                        'line-color': '#888',
                        'line-width': 8
                    }
                });
            };
        })

        if(!map.current) return 
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLate(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        })
    
    }, [pathCities])    



    return (
        <div>
            <div className="sidebar">
                Longitude: {lng}  |  Latitude:  {lat}  |  Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container h-screen" />
        </ div>
    )
}

export default Map
