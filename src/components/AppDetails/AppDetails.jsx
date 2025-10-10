import {useLocation } from "react-router"
import AppDownloadStat from "./AppDownloadStat"
import AppRatingChart from "./AppRatingChart"
import AppDescription from "./AppDescription"
import { addToDB, getStoredApp } from "../Utility/addtoDb"
import { useState } from "react"
import { toast } from "react-toastify"
const AppDetails = () => {
  const {state: app} = useLocation()
  
  const [isInstalled, setIsInstalled] = useState(getStoredApp().some(item=> item.id === app.id)) 
  const handleInstalle = (app) =>{
    addToDB(app)
    setIsInstalled(true)
    toast("App Install Successfyl!",{
      autoClose: 1200
    })
  }
  return (
    <div className="p-4 font-inter lg:max-w-[1140px] mx-auto ">
        <div className="flex gap-15 mt-20 mb-10">
            <div className="w-[180px] md:w-[220px] lg:w-[250px] h-[180px] md:h-[220px] lg:h-[250px] border-1 border-red-700 rounded-lg p-4">
                <img className="w-full h-full object-contain" src={app.image}/>
            </div>
            <div>
                <div className="mb-10">
                    <h3 className="text-[#001931] font-bold text-2xl">{app.title}</h3>
                    <p className="textarea-md text-[#627382]">Developed by <span className=" font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">{app.companyName}</span></p>
                </div>

                <AppDownloadStat app={app}></AppDownloadStat>
                <button onClick={()=> handleInstalle(app)} className="btn bg-[#00D390] text-white disabled:font-bold" disabled={isInstalled}>
                    {isInstalled ? "Installed" :
                    `Install Now (${app.size} MB)`
                    
                    }
                    </button>
            </div>
        </div>
        <div className="border-t-2 border-dotted border-[#627382] mb-10 ">
        </div>
        <AppRatingChart app={app}></AppRatingChart>
        <AppDescription app={app}></AppDescription>
    </div>
  )
}

export default AppDetails
