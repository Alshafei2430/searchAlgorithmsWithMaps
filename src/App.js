import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import DropdownMenue from './components/DropdownMenue'
import Overlay from './components/Overlay'
import HumborgerMenue from './components/HumborgerMenue';

mapboxgl.accessToken = "pk.eyJ1IjoiYWxzaGFmZWkyNDMwIiwiYSI6ImNrczBkNnV5NTExZ3cycG85aXFvODlhcjYifQ.nHRJE_NeCudV5qyb8baZkg"

export default function App(){
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
    const [lng, setLng] = useState(31.23);
    const [lat, setLate] = useState(30.07);
    const [zoom, setZoom] = useState(5);
    const [coordinates] = useState([
        [31.23, 30.06],
        [31.01, 30.55],
        [29.99, 31.30],
        [31.17, 31.26],
        [32.27, 31.40],
        [31.28, 27.29],
        [32.53, 30.20],
      ])
    const features = coordinates.map(coordinate => ({
        'type': 'Feature',
        'properties': {
            'message': `${coordinate[0]}`,
            'iconSize': [60, 60]
        },
        'geometry': {
            'type': 'Point',
            'coordinates': [coordinate[0], coordinate[1]]
        }
    }))

    const geojson = {
        'type': 'FeatureCollection',
        'features': features,
    };

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        })
        // Add markers to the map.
        for (const marker of geojson.features) {
            console.log(marker)
            // Create a DOM element for each marker.
            const el = document.createElement('div');
            const width = marker.properties.iconSize[0];
            const height = marker.properties.iconSize[1];
            el.className = 'marker';
            el.style.backgroundImage = `url(https://placekitten.com/g/${width}/${height}/)`;
            el.style.width = `${width}px`;
            el.style.height = `${height}px`;
            el.style.backgroundSize = '100%';
            
            el.addEventListener('click', () => {
                window.alert(marker.properties.message);
            });
            
            // Add markers to the map.
            new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map.current);
        }
})

    useEffect(() => {
        if (!map.current) return;
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLate(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        })
        map.current.on('load', () => {
            if (!map.current.getSource('route')) {
                map.current.addSource('route', {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'properties': {},
                        'geometry': {
                            'type': 'LineString',
                            'coordinates': coordinates
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
        });     
    })

    const handleShowSidebar = (e) => {
        // e.preventDefault();
        console.log(isSidebarOpen)
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <div>
            {isSidebarOpen ? (
                <>
                    <DropdownMenue handleShowSidebar={handleShowSidebar}/>
                    <Overlay handleShowSidebar={handleShowSidebar} />
                </>
            ): <HumborgerMenue handleShowSidebar={handleShowSidebar} />
            }
            <div>
                {/* <div className="sidebar">
                    Longitude: {lng}  |  Latitude:  {lat}  |  Zoom: {zoom}
                </div> */}
                <div ref={mapContainer} className="map-container h-screen" />
            </div>
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
    