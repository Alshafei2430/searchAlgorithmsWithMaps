import { useState } from "react"

const RadioButton = (props) => {
    const {algo} = props
    const [checked, setChecked] = useState(false)

    const handleChange = (e) => {
        e.preventDefault()
        setChecked(true)
        props.selectAlgo(e.target.value)

    }

    return(
        <div className="pl-2">
            <label className="flex items-center">
                <input
                    className="mr-2"
                    type='radio'
                    value={algo}
                    checked={checked}
                    onChange={handleChange}
                />
                {algo}
            </label>
        </div>
    )
}

export default RadioButton;