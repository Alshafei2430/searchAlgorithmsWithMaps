import RadioButton from "./RadioButton";
import CloseIcon from "./CloseIcon";
import Menu from "./Menu";
const DropdownMenue = ({handleShowSidebar}) => {

    return(
        <div className="flex flex-col w-1/2 xl:w-1/4 z-30 h-screen absolute p-3 bg-white">
            <CloseIcon handleShowSidebar={handleShowSidebar}/>
            {/* radio buttoms to choose algorithms */}
            <form className="flex flex-col ">
                <label className="my-4">
                    Algorithems
                    <RadioButton />
                    <RadioButton />
                    <RadioButton />
                </label>
                <label className="mb-4">
                    Country
                    <Menu />
                </label>
                <label className="mb-4">
                    Starting city
                    <Menu />
                </label>
                <label className="mb-4">
                    Destination City
                    <Menu />
                </label>
            </form>
            {/* dropdown menue to choose the country */}
            {/* two dropdown menu to choose the start city and end city  according
                to the country chosen
            */}
        </div>
    )
}

export default DropdownMenue;