const Menu = (props) => {
    const {cities, city} = props

    const handleChange = (e) => {
        e.preventDefault()
        props.selectCity(e.target.value)
    }

    return(
        <select value={city} onChange={handleChange} className="ml-2">
            {cities?.map((city) => 
                <option>{city}</option>
            )}
        </select>
    )
}

export default Menu