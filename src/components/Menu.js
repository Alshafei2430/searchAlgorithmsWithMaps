const Menu = (props) => {
    const {cities, city} = props

    const handleChange = (e) => {
        e.preventDefault()
        props.selectCity(e.target.value)
    }

    return(
        <select value={city} onChange={handleChange} className="focus:ring-blue-100  focus:border-blue-100 p-2 border-gray-300 rounded-lg text-sm shadow-sm">
            {cities?.map((city) => 
                <option className="">{city}</option>
            )}
        </select>
    )
}

export default Menu