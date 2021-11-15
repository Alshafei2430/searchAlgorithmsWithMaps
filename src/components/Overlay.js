const Overlay = ({handleShowSidebar}) => {
    const handleChange = (e) => {
        handleShowSidebar(e)
    }
    return(
    <div onClick={handleChange}  className='bg-blue-500 opacity-25 h-screen w-full absolute z-20' />
    )
}
export default Overlay;