import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../Header/Header";




const Root = () => {
    return (
        <div className="container mx-auto">
            <div className="px-24 ">
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;