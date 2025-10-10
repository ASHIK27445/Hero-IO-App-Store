import { Link } from "react-router";
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { PiDownloadSimple } from "react-icons/pi"

const AppCard = ({ appData }) => {
  const { id, image, title, downloads, ratingAvg } = appData

  return (
    <Link to={`/appDetails/${id}`} state={appData}> 
    {/* //*👈 pass the whole object here/* */}
      <div className="border-2 border-black max-w-[250px] w-full overflow-hidden h-[300px] p-4 rounded-md cursor-pointer hover:shadow-lg transition">
        <div className="w-full h-[180px] border-2 border-amber-600 rounded-lg p-4">
          <img className="w-full h-full object-contain" src={image} alt={title} />
        </div>

        <h3 className="mt-3">{title}</h3>
        <div className="flex justify-between">
          <p className="text-[#00D390] flex items-center font-medium bg-[#F1F5E8] rounded-md p-1 my-3 text-xs">
            <PiDownloadSimple />
            <span className="pl-1">
              {downloads / 10000000 >= 1000 ? downloads / 10000000000 : downloads / 10000000}{" "}
              {downloads / 10000000 >= 1000 ? "B" : "M"}
            </span>
          </p>
          <p className="text-[#FF8811] flex items-center font-medium bg-[#F1F5E8] rounded-md p-1 my-3 text-xs">
            {ratingAvg > 4.4 ? <FaStar /> : <FaStarHalfAlt />}
            <span className="pl-1">{ratingAvg}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default AppCard
