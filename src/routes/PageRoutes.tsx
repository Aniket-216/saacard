import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import App from "../App";
import ContactUsPage from "../pages/ContactUsPage";
import FaqPage from "../pages/FaqPage";
import CollectPayment from "../pages/payment/CollectPayment";
import PaymentGateway from "../pages/payment/PaymentGateway";
import PaymentLinks from "../pages/payment/PaymentLinks";
import UpiAutopay from "../pages/payment/UpiAutopay";
import Invoices from "../pages/payment/Invoices";
import Cards from "../pages/payment/Cards";
import PricingPage from "../pages/PricingPage";

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
                path: "company/faq",
                element: <FaqPage />,
            },
            {
                path: "company/contact",
                element: <ContactUsPage />,
            },
            {
                path: "payments/collect-payments",
                element: <CollectPayment />,
            },
            {
                path: "payments/payments-gateway",
                element: <PaymentGateway />,
            },
            {
                path: "payments/payments-links",
                element: <PaymentLinks />,
            },
            {
                path: "payments/upi-autopay",
                element: <UpiAutopay />,
            },
            {
                path: "payments/invoices",
                element: <Invoices />,
            },
            {
                path: "payments/cards",
                element: <Cards />,
            },
            {
                path: "pricing",
                element: <PricingPage />,
            },
        ],
    },
]);
