import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Root = () => {
    return (
        <div className="inter">
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Root;