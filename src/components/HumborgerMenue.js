const HumborgerMenue = ({handleShowSidebar}) => {
    const handleChange = (e) => {
        handleShowSidebar(e)
    }
    return (
        <svg onClick={handleChange} class="h-8 w-8 fill-current z-40 absolute bg-white m-2 rounded " viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    )
}
export default HumborgerMenue;