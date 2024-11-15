import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import App from "../App";
import ContactUsPage from "../pages/ContactUsPage";

export const PageRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "company/about",
                element: <AboutPage />,
            },
            {
                path: "company/contact",
                element: <ContactUsPage />,
            },
        ],
    },
]);
