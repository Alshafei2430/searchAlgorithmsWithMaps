const CloseIcon = ({handleShowSidebar}) => {
    const handleChange = (e) => {
        handleShowSidebar(e)
    }
    return(
        <svg onClick={handleChange} class="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}

export default CloseIcon;