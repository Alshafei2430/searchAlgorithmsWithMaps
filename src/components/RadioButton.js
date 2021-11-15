const RadioButton = () => {
    return(
        <div className="pl-2">
            <label className="flex items-center">
                <input
                    className="mr-2"
                    type='radio'
                    value="radio"
                    checked={true}
                />
                radio
            </label>
        </div>
    )
}

export default RadioButton;