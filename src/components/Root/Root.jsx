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
                navigation.state === 'loading' && <p>Loading......</p>
            }
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer/>
        </div>
    )
}
export default Root