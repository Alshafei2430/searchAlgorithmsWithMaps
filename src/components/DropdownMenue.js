import CloseIcon from "./CloseIcon";
import Menu from "./Menu";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {  getCities, getPathCities } from "../redux/cities/cities-actions";

const mapState = ({cities}) => ({
    cities: cities.cities
})

const DropdownMenue = ({handleShowSidebar}) => {
    const {cities} = useSelector(mapState)
    const dispatch = useDispatch()
    const [startCity, setStartCity] = useState('')
    const [endCity, setEndCity] = useState('')
    const [algo, setAlgo] = useState('')
    // const [algorithms, setAlgorithms] = useState(["Depth First Search",'Breadth First Search', 'A*'])

    useEffect(() => {
        dispatch(getCities())
    }, [dispatch])
    
    const selectStartCity = (city) => {
        setStartCity(city)
    }
    const selectEndCity = (city) => {
        setEndCity(city)
    }

    const handleSubmit =  (e) => {
        e.preventDefault()
        console.log("go")
        dispatch(getPathCities({
            startCity,
            endCity,
            algo,
        }))
    }
    

    return(
        <div className="flex flex-col w-1/2 xl:w-1/4 z-30 h-screen absolute p-3 bg-white">
            <CloseIcon handleShowSidebar={handleShowSidebar}/>
            {/* radio buttoms to choose algorithms */}
            <form className="flex flex-col ">
                <label className="my-4">
                    Algorithems
                    <label>
                        <input
                            type='radio'
                            name='picked'
                            value='depthFirstSearch'
                            onChange = {(e) => setAlgo(e.target.value)}
                            checked={algo === 'depthFirstSearch'}
                        />
                        Depth First Search
                    </label>
                    <label>
                        <input
                            type='radio'
                            name='picked'
                            value='breadthFirstSearch'
                            onChange = {(e) => setAlgo(e.target.value)}
                            checked={algo === 'breadthFirstSearch'}
                        />
                        BreadthFirstSearch
                    </label>
                    <label>
                        <input
                            type='radio'
                            name='picked'
                            value='aStar'
                            onChange = {(e) => setAlgo(e.target.value)}
                            checked={algo === 'aStar'}
                        />
                        A*
                    </label>

                </label>
                <label className="mb-4">
                    Starting city
                    {cities.length ?
                        <Menu cities={cities} selectCity={selectStartCity}/>
                        : <div>loading</div>
                    }
                </label>
                <label className="mb-4">
                    Destination City
                    {cities.length ?
                        <Menu cities={cities} selectCity={selectEndCity}/>
                        : <div>loading</div>
                    }
                </label>
                <button type="submit" onClick={handleSubmit}>Go</button>
            </form>
            {/* dropdown menue to choose the country */}
            {/* two dropdown menu to choose the start city and end city  according
                to the country chosen
            */}
        </div>
    )
}

export default DropdownMenue;