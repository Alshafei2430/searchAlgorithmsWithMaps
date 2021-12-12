import CloseIcon from "./CloseIcon";
import Menu from "./Menu";

import { useDispatch, useSelector } from "react-redux";
import {   getPathCities } from "../redux/cities/cities-actions";

const mapState = ({cities}) => ({
    cities: cities.cities
})

const DropdownMenue = ({handleShowSidebar, startCity, endCity, algo, selectStartCity, selectEndCity, selectAlgo}) => {
    const {cities} = useSelector(mapState)
    const dispatch = useDispatch()

    const handleSubmit =  (e) => {
        e.preventDefault()
        if (!startCity || !endCity || !algo) return;
        dispatch(getPathCities({
            startCity,
            endCity,
            algo,
        }))
        handleShowSidebar(e)
    }
    

    return(
        <div className=" text-sm md:text-lg font-medium flex flex-col w-1/2 xl:w-1/4 z-30 h-screen absolute p-3 bg-white">
            <CloseIcon handleShowSidebar={handleShowSidebar}/>
            {/* radio buttoms to choose algorithms */}
            <form className="flex flex-col ">
                <label className="my-4">
                    Algorithems
                    <div className="flex flex-col border p-2 rounded shadow">
                        <label>
                            <input
                                type='radio'
                                name='picked'
                                value='depthFirstSearch'
                                onChange = {(e) => selectAlgo(e.target.value)}
                                checked={algo === 'depthFirstSearch'}
                                className="text-blue-400 focus:ring-blue-100"
                            />
                            <span className="pl-2">Depth First Search </span>
                        </label>
                        <label>
                            <input
                                type='radio'
                                name='picked'
                                value='breadthFirstSearch'
                                onChange = {(e) => selectAlgo(e.target.value)}
                                checked={algo === 'breadthFirstSearch'}
                                className="text-blue-400 focus:ring-blue-100"
                            />
                            <span className="pl-2">BreadthFirstSearch</span>
                        </label>
                        <label>
                            <input
                                type='radio'
                                name='picked'
                                value='aStar'
                                onChange = {(e) => selectAlgo(e.target.value)}
                                checked={algo === 'aStar'}
                                className="text-blue-400 focus:ring-blue-100"
                            />
                            <span className="pl-2">A*</span>
                        </label>

                    </div>
                </label>
                <label className="flex flex-col mb-4 border p-2 rounded shadow">
                    <span>Starting city</span>
                    {cities.length ?
                        <Menu cities={cities} city={startCity} selectCity={selectStartCity}/>
                        : <div>loading</div>
                    }
                </label>
                <label className="flex flex-col mb-4 border p-2 rounded shadow">
                    <span>Destination City</span>
                    {cities.length ?
                        <Menu cities={cities} city={endCity} selectCity={selectEndCity}/>
                        : <div>loading</div>
                    }
                </label>
                <div className="flex justify-center align-center">
                    <button type="submit" onClick={handleSubmit} className="shadow-lg bg-blue-300 rounded-full w-1/2">Go</button>
                </div>
            </form>
        </div>
    )
}

export default DropdownMenue;