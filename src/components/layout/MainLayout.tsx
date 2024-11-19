import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
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
