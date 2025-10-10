import heroBanner from '../../assets/hero.png'
const BannerHero = () => {
    return(
        <div className='flex justify-center'>
            <img className='w-3/5 max-w-fit' src={heroBanner} alt="hero banner"/>
        </div>
    )
}
export default BannerHero