import { Outlet, useNavigation } from "react-router"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { ToastContainer } from "react-toastify"

const Root = () => {
    const navigation = useNavigation()
    return(
        <div>
            <Navbar></Navbar>
            {
                navigation.state === 'loading' && <div className="flex justify-center text-red-700 mt-7">
                    <span className="loading loading-spinner loading-xl"></span>
                    </div>
            }
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer/>
        </div>
    )
}
export default Root