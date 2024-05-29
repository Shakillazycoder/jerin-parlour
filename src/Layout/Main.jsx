import { Outlet } from "react-router-dom";
import Navbar from "../Share/Navbar";

const Main = () => {
    return (
        <div className="poppins-font">
            <Navbar></Navbar>
            <div className="container mx-auto px-4">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;