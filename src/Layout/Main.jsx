import { Outlet } from "react-router-dom";
import Navbar from "../Share/Navbar";
import Footer from "../Share/Footer";

const Main = () => {
    return (
        <div className="poppins-font container mx-auto">
            <Navbar></Navbar>
            <div className="min-h-[72vh]">
            <Outlet></Outlet>
            </div>
           <div className="px-4">
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Main;