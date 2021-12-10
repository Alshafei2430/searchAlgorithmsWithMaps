import { useState } from "react"


const Menu = (props) => {
    const {cities} = props
    const [selected, setSelected] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        setSelected(e.target.value)
        props.selectCity(e.target.value)
    }

    return(
        <select value={selected} onChange={handleChange} className="ml-2">
            {cities?.map((city) => 
                <option>{city}</option>
            )}
        </select>
    )
}

export default Menu