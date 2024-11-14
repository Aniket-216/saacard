import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Fragment } from "react";

const MainLayout = () => {
    return (
        <Fragment>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </Fragment>
    );
};

export default MainLayout;
