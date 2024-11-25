import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import App from "../App";
import ContactUsPage from "../pages/ContactUsPage";
import FaqPage from "../pages/FaqPage";
import CollectPaymentPage from "../pages/payment/CollectPaymentPage";
import PaymentGatewayPage from "../pages/payment/PaymentGatewayPage";
import PaymentLinksPage from "../pages/payment/PaymentLinksPage";
import UpiAutopayPage from "../pages/payment/UpiAutopayPage";
import InvoicesPage from "../pages/payment/InvoicesPage";
import CardsPage from "../pages/payment/CardsPage";
import PricingPage from "../pages/PricingPage";
import GstSolutionPage from "../pages/resources/GstSolutionPage";
import AccountingPage from "../pages/resources/AccountingPage";
import PayoutPage from "../pages/banking/PayoutPage";
import VendorPaymentsPage from "../pages/banking/VendorPaymentsPage";
import CurrentAccountPage from "../pages/banking/CurrentAccountPage";
import CashManagementPage from "../pages/banking/CashManagementPage";
import PayrollPage from "../pages/PayrollPage";
import Company from "../pages/Company";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export const PageRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            { path: "sign-in", element: <SignIn /> },
            { path: "sign-up", element: <SignUp /> },
            {
                path: "company",
                element: <Company />,
                children: [
                    {
                        path: "about",
                        element: <AboutPage />,
                    },
                    {
                        path: "faq",
                        element: <FaqPage />,
                    },
                    {
                        path: "contact",
                        element: <ContactUsPage />,
                    },
                ],
            },
            {
                path: "payments/collect-payments",
                element: <CollectPaymentPage />,
            },
            {
                path: "payments/payments-gateway",
                element: <PaymentGatewayPage />,
            },
            {
                path: "payments/payments-links",
                element: <PaymentLinksPage />,
            },
            {
                path: "payments/upi-autopay",
                element: <UpiAutopayPage />,
            },
            {
                path: "payments/invoices",
                element: <InvoicesPage />,
            },
            {
                path: "payments/cards",
                element: <CardsPage />,
            },
            {
                path: "banking/payouts",
                element: <PayoutPage />,
            },
            {
                path: "banking/vendor-payments",
                element: <VendorPaymentsPage />,
            },
            {
                path: "banking/current-accounts",
                element: <CurrentAccountPage />,
            },
            {
                path: "banking/cash-management",
                element: <CashManagementPage />,
            },
            {
                path: "payroll",
                element: <PayrollPage />,
            },
            {
                path: "resources/gst-solutions",
                element: <GstSolutionPage />,
            },
            {
                path: "resources/accounting",
                element: <AccountingPage />,
            },
            {
                path: "pricing",
                element: <PricingPage />,
            },
        ],
    },
]);
