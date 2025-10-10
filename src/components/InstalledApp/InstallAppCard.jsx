import { IoCloudDownloadSharp } from "react-icons/io5"
import { FaStar } from "react-icons/fa"
import { MdOutlineAppShortcut } from "react-icons/md"
const InstallAppCard = ({ install, handleUninstall}) => {
  const { image, title, downloads, ratingAvg, size } = install;
  return (
    <div className="max-w-[1064px] mx-auto font-inter flex justify-between items-center mb-3 border-b-1 border-dashed border-b-gray-600 pb-2">
      <div className="flex">
        <div className="w-[50px] h-[50px] border-1 border-amber-700">
          <img className="w-full h-full object-contain" src={image} />
        </div>
        <div className="pl-4">
            <h2 className="text-[#001931] font-medium textarea-md">{title}</h2>
            <div className="flex">
                    <div className=" pr-4">
                        <p className="flex gap-2 text-[#001931] text-xs">
                        {" "}
                        <IoCloudDownloadSharp className="text-[#00D390] w-[15px] h-[15px]"></IoCloudDownloadSharp>{" "}
                        {downloads / 10000000 >= 1000 ? downloads / 10000000000 : downloads / 10000000}{" "}
                        {downloads / 10000000 >= 1000 ? "B" : "M"}
                        </p>
                    </div>

                    <div className=" pr-4">
                        <p className="flex gap-2 text-[#001931] text-xs">
                        {" "}
                        <FaStar className="text-[#FF8811] w-[15px] h-[15px]"></FaStar>{" "}
                        {ratingAvg}
                        </p>
                    </div>

                    <div className=" pr-4">
                        <p className="flex gap-2 text-[#001931] text-xs">
                        {" "}
                        <MdOutlineAppShortcut className="text-[#632EE3] w-[15px] h-[15px]"></MdOutlineAppShortcut>{" "}
                        {size} MB
                        </p>
                    </div>
            </div>
        </div>
      </div>
      <button onClick={() => handleUninstall(install.id)} className="btn bg-[#00D390] text-white">Uninstall</button>
    </div>
  );
};
export default InstallAppCard;
