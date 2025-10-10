import errorRouting from '../../assets/error-404.png'
const ErrorRouting = () => {
    return(
        <div className='flex flex-col justify-center my-20'>
            <div className=' max-w-[1064px] mx-auto'>
                <img src={errorRouting}/>
            </div>
            <div className=' max-w-[1064px] mx-auto'>
                <h2 className="text-[#001931] font-bold text-[42px]">Oops, page not found!</h2>
                <p className="text-[#627382] textarea-md mt-2">The page you are looking for is not available.</p>
            </div>
            
            

        </div>
    )
}
export default ErrorRouting