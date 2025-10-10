import { useLoaderData } from "react-router"
import AppCard from "../AppCard/AppCard"
import { useState } from "react"

const Apps = () => {
    const data = useLoaderData()
    const [searchApp, setSearchApp] = useState('')
    const [loading, setLoading] = useState(false)

    const filterSearch = data.filter(app => 
        app.title.toLowerCase().includes(searchApp.toLowerCase())
    )

    const handleSearch = (text) => {
        text.preventDefault()
        setLoading(true)
        const filterSearch = data.filter(app => 
        app.title.toLowerCase().includes(searchApp.toLowerCase())
    )
    }
    
    return(
        <div>
            <div className="text-center mt-20 mb-10">
                <h2 className="text-[#001931] text-4xl font-semibold md:font-bold md:text-[42px]">Our All Applications</h2>
                <p className="text-[#627382] px-5 textarea-md mt-2">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="flex justify-between items-center my-4 max-w-[1064px] mx-auto gap-5">
                <h3 className="text-[#001931] font-semibold text-lg px-4 md:px-0">({filterSearch.length}) Apps Found</h3>
                <div className="pr-2 lg:pr-0">
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                            </g>
                            </svg>
                        <input type="search" required placeholder="Search" value={searchApp} onChange={app=>
                            setSearchApp(app.target.value)
                        } />
                    </label>
                </div>
            </div>
            <div className="grid max-w-[400px] grid-cols-2 sm md:grid-cols-3 md:max-w-[800px] lg:grid-cols-4 lg:max-w-[1064px] gap-4 mx-auto mb-10">
                {   filterSearch.length > 0 ?
                    filterSearch.map(appData => <AppCard key={appData.id} appData={appData}></AppCard>) :
                    <div className=" mt-7 font-bold text-lg p-2 rounded-lg flex justify-center col-span-full mx-auto border-2 border-black text-[#DC143C]"><p>No App Found</p></div>
                }
            </div>
        </div>
    )
}
export default Apps