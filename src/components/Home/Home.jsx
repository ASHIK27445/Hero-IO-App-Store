import { useLoaderData } from "react-router"
import Banner from "./Banner"
import BannerHero from "./BannerHero"
import Status from "./Status"
import TopApp from "../TopApp/TopApp"

const Home = () => {
    const data = useLoaderData()
    return(
        <div>
        <Banner></Banner>
        <BannerHero></BannerHero>
        <Status></Status>
        <TopApp data = {data}></TopApp>
        </div>
    )
}
export default Home