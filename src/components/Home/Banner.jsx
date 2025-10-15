import googlePlaystoreLogo from '../../assets/google-playstore-logo.svg'
import appstoreLogo from '../../assets/app-store-logo.png'
import { Link } from 'react-router'
const Banner = () => {
    return(
        <div className="max-w-[1140px] mx-auto text-center font-inter mt-20 mb-10">
            <h1 className="text-[#001931] font-bold text-7xl">We Build</h1>
            <h1 className="text-[#001931] font-bold text-7xl"><span className="bg-[#632EE3] bg-clip-text text-transparent">Productive</span> Apps</h1>
            <p className="text-[#627382] text-lg mt-3 mb-10">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div>
                <button className="btn font-semibold text-lg text-[#001931] rounded-sm mr-4"> <img className='h-[28px]' src={googlePlaystoreLogo} alt="google playstor logo" /><Link to="https://play.google.com/store/games?hl=en">Play Store</Link> </button>
                <button className="btn font-semibold text-lg text-[#001931] rounded-sm"> <img className='h-[28px]' src={appstoreLogo} alt="google playstor logo" /><Link to="https://www.apple.com/app-store/">App Store</Link> </button>
            </div>
        </div>
    )
}
export default Banner