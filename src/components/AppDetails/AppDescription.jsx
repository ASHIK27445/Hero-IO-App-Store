import { FaCircle } from "react-icons/fa6"
const AppDescription = ({app}) => {
    return(
        <div className="font-inter mb-15 mt-10">
            <h2 className='text-[#001931] font-semibold text-xl'>Description</h2>
            <p className="text-[#627382] textarea-md">{app?.description?.mainSection}</p>
            <h3 className="text-[#001931] font-semibold text-lg mt-5">Key Feautes</h3>
            {
                app?.description?.keyFeature.map((keyFeature, index)=> 
                <p key={index} className="text-[#FF8811] flex items-center">
                    <FaCircle className="w-[10px]"></FaCircle>
                    <span className="text-[#627382] textarea-md pl-2">{keyFeature[`key${index + 1}`]}</span>
                </p>)
            }
            <h3 className="text-[#001931] font-semibold text-lg mt-5">What's New</h3>
            <p className="text-[#627382] textarea-md">{app?.description?.whatsNew}</p>
        </div>
    )
}
export default AppDescription