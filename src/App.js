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
    const [startCity, setStartCity] = useState('Cairo')
    const [endCity, setEndCity] = useState('Cairo')
    const [algo, setAlgo] = useState('')

    useEffect(() => {
        dispatch(getCities())
    }, [dispatch])

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