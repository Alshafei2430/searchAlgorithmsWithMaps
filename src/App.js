import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import DropdownMenue from './components/DropdownMenue'
import Overlay from './components/Overlay'
import HumborgerMenue from './components/HumborgerMenue';
import Map from './components/Map';
import { useSelector, useDispatch } from 'react-redux';
import {getCities} from './redux/cities/cities-actions'

mapboxgl.accessToken = "pk.eyJ1IjoiYWxzaGFmZWkyNDMwIiwiYSI6ImNrczBkNnV5NTExZ3cycG85aXFvODlhcjYifQ.nHRJE_NeCudV5qyb8baZkg"

const mapState = ({cities}) => ({
    pathCities: cities.pathCities,
})

export default function App(){
    const dispatch = useDispatch()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const {pathCities} = useSelector(mapState)
    const [startCity, setStartCity] = useState('')
    const [endCity, setEndCity] = useState('')
    const [algo, setAlgo] = useState('')

    useEffect(() => {
        dispatch(getCities())
    }, [dispatch])
    // useEffect(() => {
    //     // get cities from the backend
    //     fetch('http://localhost:5000/depthFirstSearch')
    //     .then(response => response.json())
    //     .then(({data: cities}) => {
    //         console.log(cities)
    //         let featuresList = []
    //         for (const city of cities){
    //             console.log("here")
    //             featuresList.push({
    //                 'type': 'Feature',
    //                 'properties': {
    //                     'cityName': `${city.name}`,
    //                     // 'cityId': `${city.id}`,
    //                     'message': `${city.lat}`,
    //                     'iconSize': [60, 10]
    //                 },
    //                 'geometry': {
    //                     'type': 'Point',
    //                     'coordinates': [city.lng, city.lat]
    //                 }
    //             })
    //         }

    //         setGeojson({
    //             'type': 'FeatureCollection',
    //             'features': featuresList,
    //         })
    //     })
            
    // }, [])
    // useEffect(() => {
    //     if(!geojson.features) return;
    //         // create a helper function
    //         // function setAttributes(el, attrs) {
    //         //     for(var key in attrs) {
    //         //     el.setAttribute(key, attrs[key]);
    //         //     }
    //         // }
    //         for (const marker of geojson.features) {
    //                 // const mark = document.createElement('svg')
    //                 // setAttributes(mark, {
    //                 //     'class': 'h-5 w-5  fill-current text-green-600',
    //                 //     'viewBox': '0 0 20 20',
    //                 // })
    //                 // const svgPath = document.createElement('path')
    //                 // setAttributes(svgPath, {
    //                 //     'fill-rule': "evenodd",
    //                 //     'd':"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
    //                 //     'clip-rule': "evenodd",
    //                 // })
    //                 // mark.appendChild(svgPath)
                    
    //                 // el.addEventListener('click', () => {
    //                 //     window.alert(marker.properties.message);
    //                 // });
                    
    //                 // Add markers to the map.
    //                 // Set marker options.
    //                 new mapboxgl.Marker({
    //                     color: "#ff0fff",
                        
    //                 }).setLngLat(marker.geometry.coordinates).addTo(map.current);
    //                 // new mapboxgl.Marker(mark)
    //                 // .setLngLat(marker.geometry.coordinates)
    //                 // .addTo(map.current);
    //             }
    //     }, [geojson])

// // Add markers to the map.
// if(features.length > 0)
// {
//     
// }

    useEffect(() => {
        console.log('path changed')
    }, [pathCities])


    const handleShowSidebar = (e) => {
        e.preventDefault();
        setIsSidebarOpen(!isSidebarOpen)
    }
    const selectStartCity = (city) => {
        setStartCity(city)
    }
    const selectEndCity = (city) => {
        setEndCity(city)
    }
    const selectAlgo = (city) => {
        setAlgo(city)
    }

    return (
        <div>
                {isSidebarOpen ? (
                    <>
                        <DropdownMenue
                        startCity={startCity}
                        endCity={endCity}
                        algo={algo}
                        handleShowSidebar={handleShowSidebar}
                        selectStartCity={selectStartCity}
                        selectEndCity={selectEndCity}
                        selectAlgo={selectAlgo}
                        />
                        <Overlay handleShowSidebar={handleShowSidebar} />
                    </>
                ): <HumborgerMenue handleShowSidebar={handleShowSidebar} />
            }
                <Map path={pathCities}/>
            </div>
    )
}

// map.on('load', () => {
//     map.addSource('route', {
//     'type': 'geojson',
//     'data': {
//     'type': 'Feature',
//     'properties': {},
//     'geometry': {
//     'type': 'LineString',
//     'coordinates': [
//         [-122.483696, 37.833818],
//         [-122.483482, 37.833174],
//         [-122.483396, 37.8327],
//         [-122.483568, 37.832056],
//         [-122.48404, 37.831141],
//         [-122.48404, 37.830497],
//         [-122.483482, 37.82992],
//         [-122.483568, 37.829548],
//         [-122.48507, 37.829446],
//         [-122.4861, 37.828802],
//         [-122.486958, 37.82931],
//         [-122.487001, 37.830802],
//         [-122.487516, 37.831683],
//         [-122.488031, 37.832158],
//         [-122.488889, 37.832971],
//         [-122.489876, 37.832632],
//         [-122.490434, 37.832937],
//         [-122.49125, 37.832429],
//         [-122.491636, 37.832564],
//         [-122.492237, 37.833378],
//         [-122.493782, 37.833683]
//     ]
//     }
//     }
//     });
//     map.addLayer({
//     'id': 'route',
//     'type': 'line',
//     'source': 'route',
//     'layout': {
//     'line-join': 'round',
//     'line-cap': 'round'
//     },
//     'paint': {
//     'line-color': '#888',
//     'line-width': 8
//     }
//     });
//     });

// map.loadImage(
//     'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
//     (error, image) => {
//     if (error) throw error;
//     map.addImage('custom-marker', image);
//     // Add a GeoJSON source with 2 points
//     map.addSource('points', {
//     'type': 'geojson',
//     'data': {
//     'type': 'FeatureCollection',
//     'features': [
//     {
//     // feature for Mapbox DC
//     'type': 'Feature',
//     'geometry': {
//     'type': 'Point',
//     'coordinates': [
//     -77.03238901390978, 38.913188059745586
//     ]
//     },
//     'properties': {
//     'title': 'Mapbox DC'
//     }
//     },
//     {
//     // feature for Mapbox SF
//     'type': 'Feature',
//     'geometry': {
//     'type': 'Point',
//     'coordinates': [-122.414, 37.776]
//     },
//     'properties': {
//     'title': 'Mapbox SF'
//     }
//     }
//     ]
//     }
//     });
     
//     // Add a symbol layer
//     map.addLayer({
//     'id': 'points',
//     'type': 'symbol',
//     'source': 'points',
//     'layout': {
//     'icon-image': 'custom-marker',
//     // get the title name from the source's "title" property
//     'text-field': ['get', 'title'],
//     'text-font': [
//     'Open Sans Semibold',
//     'Arial Unicode MS Bold'
//     ],
//     'text-offset': [0, 1.25],
//     'text-anchor': 'top'
//     }
//     });
//     }
//     );
    