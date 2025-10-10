
import logo from '../../assets/logo.png'
import './Footer.css'
import FooterLink from './FooterLink'

const Footer = () => {
    return(
        <div className="bg-[linear-gradient(184deg,rgba(0,0,0,1)_0%,rgba(22,22,38,1)_46%,rgba(24,24,41,1)_69%,rgba(25,27,87,1)_100%,rgba(54,45,77,1)_100%,rgba(13,0,0,1)_100%)] font-inter pb-10 lg:flex lg:justify-between lg:px-15 lg:pt-10">
            <div className='flex flex-col justify-center items-center lg:items-baseline py-5 lg:w-2/5'>
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold pt-10 pb-5 px-3">Build. Learn. <br className='hidden lg:block'/> Grow—All in one place.</h2>
                <div className='flex'>
                    <img className="h-[30px] pr-1" src={logo} alt="logo" />
                    <p className='text-white text-xl font-bold'>HERO.IO</p>
                </div>
                <button className='text-white textarea-md bg-transparent gredient-border px-4 lg:px-10 py-2 lg:py-3 m-3 cursor-pointer'>Explore Apps</button>
            </div>
            <FooterLink></FooterLink>
        
        </div>
    )
}
export default Footer