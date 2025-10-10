import { IoCloudDownloadSharp } from "react-icons/io5"
import { FaStar } from "react-icons/fa"
import { MdReviews } from "react-icons/md"
const AppDownloadStat = ({app}) => {
    return(
        <div className="flex gap-6 border-t-1 border-dotted border-[#627382] ">
                <div className="py-6 pr-10">
                    <p>  <IoCloudDownloadSharp className="text-[#00D390] w-[30px] h-[30px]"></IoCloudDownloadSharp> <span className="text-[#001931] text-xs">Downloads</span></p>
                    <p className="text-[#001931] font-extrabold text-3xl">
                            {app.downloads / 10000000 >= 1000 ? app.downloads / 10000000000 : app.downloads / 10000000}{" "}
                            {app.downloads / 10000000 >= 1000 ? "B" : "M"}
                    </p>
                </div>

                <div className="py-6 pr-10">
                    <p>  <FaStar className="text-[#FF8811] w-[30px] h-[30px]"></FaStar> <span className="text-[#001931] text-xs">Average Ratings</span></p>
                    <p className="text-[#001931] font-extrabold text-3xl">
                            {app.ratingAvg}
                    </p>
                </div>

                <div className="py-6 pr-10">
                    <p>  <MdReviews className="text-[#632EE3] w-[30px] h-[30px]"></MdReviews> <span className="text-[#001931] text-xs">Total Reviews</span></p>
                    <p className="text-[#001931] font-extrabold text-3xl">
                            {app.reviews>=1000000 ? `${app.reviews/1000000} M` : `${app.reviews/1000} K`  }
                    </p>
                </div>
        </div>
    )
}
export default AppDownloadStat