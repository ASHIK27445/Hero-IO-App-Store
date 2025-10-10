import { useState } from "react"
import { getStoredApp, uninstallApp } from "../Utility/addtoDb"
import InstallAppCard from "./InstallAppCard"
import { toast } from "react-toastify"
import { IoMdArrowDropdown } from "react-icons/io"
const InstalledApp = () => {
    const [installedApp, setIsInstalled] = useState(getStoredApp())
    const [sortby, setsSortBy] = useState("")
    const handleUninstall = (id) => {
        const update = uninstallApp(id)
        setIsInstalled(update)
        toast.success("Uninstalled Successfully!",{
            autoClose: 1200
        })
    }
    const handleSort = (type, text) => {
        const sortedApp = [...installedApp]

        if(type === 'high-low'){
            sortedApp.sort((a,b)=> b.downloads - a.downloads)
        }
        else if(type === 'low-high'){
            sortedApp.sort((a,b)=> a.downloads - b.downloads)
        }
        else if(type === 'default'){
            sortedApp.sort(a=> a.ratingAvg)
        }

        setIsInstalled(sortedApp)
        setsSortBy(text)
    }
    return(
        <div className="mb-20 font-inter">
            <div className="text-center mt-20 mb-10">
                <h2 className="text-[#001931] font-bold text-[42px]">Your Installed Apps</h2>
                <p className="text-[#627382] textarea-md mt-2">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="flex justify-between items-center my-4 max-w-[1064px] mx-auto gap-5 border-1 border-dashed border-y-rose-700 pl-5 pr-2 rounded-md">
                <h3 className="text-[#001931] font-semibold text-lg">({installedApp.length}) Apps Found</h3>
                <div className="dropdown dropdown-left dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1 text-[#627382]">Sort By 
                        <IoMdArrowDropdown className="text-2xl pt-1"></IoMdArrowDropdown> {sortby}</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm">
                            <li><a onClick={()=>handleSort('high-low', 'High-Low')}>High-low</a></li>
                            <li><a onClick={()=>handleSort('low-high', 'Low-High')}>Low-High</a></li>
                            <li><a onClick={()=>handleSort('default', '')}>Default</a></li>
                        </ul>
                    </div>
            </div>
            <div></div>
            {
                installedApp.map(install => <InstallAppCard 
                    key={install.id} 
                    install={install}
                    handleUninstall={handleUninstall}
                ></InstallAppCard>)
            }
        </div>
    )
}
export default InstalledApp