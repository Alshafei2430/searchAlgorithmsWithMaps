const CloseIcon = ({handleShowSidebar}) => {
    const handleChange = (e) => {
        handleShowSidebar(e)
    }
    return(
        <svg onClick={handleChange} class="h-6 w-6 absolute text-white right-0 mr-2 rounded-full bg-blue-300 p font-light text-sm" viewBox="0 0 24 24" stroke="currentColor">
            <path className="p-4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}

export default CloseIcon;