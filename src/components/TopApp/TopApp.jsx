import { Link } from "react-router"
import AppCard from "../AppCard/AppCard"

const TopApp = ({data}) => {
    return(
        <div className="font-inter">
            <div className="text-center pt-20 pb-10">
                <h2 className="text-[#001931] font-bold text-[42px]">Trending Apps</h2>
                <p className="text-[#627382] text-sm">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="grid max-w-[532px] grid-cols-2 sm md:grid-cols-3 md:max-w-[800px] lg:grid-cols-4 lg:max-w-[1064px] gap-4 mx-auto mb-10">
                {
                    data
                    .sort((a, b)=> b.downloads - a.downloads)
                    .slice(0,8)
                    .map(appData => <AppCard key={appData.id} appData={appData}></AppCard>)
                }
            </div>
            <div className=" text-white font-semibold text-sm flex justify-center items-center">
                <button className="bg-[#632EE3] bg-[linear-gradient(112deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)] px-6 py-2.5 rounded-lg cursor-pointer mb-15">
                    <Link to="apps">Show All</Link>     
                </button>
            </div>
        </div>
    )
}
export default TopApp