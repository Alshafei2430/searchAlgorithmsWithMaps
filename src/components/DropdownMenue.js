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
                            onChange = {(e) => selectAlgo(e.target.value)}
                            checked={algo === 'depthFirstSearch'}
                        />
                        Depth First Search
                    </label>
                    <label>
                        <input
                            type='radio'
                            name='picked'
                            value='breadthFirstSearch'
                            onChange = {(e) => selectAlgo(e.target.value)}
                            checked={algo === 'breadthFirstSearch'}
                        />
                        BreadthFirstSearch
                    </label>
                    <label>
                        <input
                            type='radio'
                            name='picked'
                            value='aStar'
                            onChange = {(e) => selectAlgo(e.target.value)}
                            checked={algo === 'aStar'}
                        />
                        A*
                    </label>

                </label>
                <label className="mb-4">
                    Starting city
                    {cities.length ?
                        <Menu cities={cities} city={startCity} selectCity={selectStartCity}/>
                        : <div>loading</div>
                    }
                </label>
                <label className="mb-4">
                    Destination City
                    {cities.length ?
                        <Menu cities={cities} city={endCity} selectCity={selectEndCity}/>
                        : <div>loading</div>
                    }
                </label>
                <button type="submit" onClick={handleSubmit}>Go</button>
            </form>
        </div>
    )
}

export default DropdownMenue;