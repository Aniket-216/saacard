import BusinessGrows from "../../components/section/payment-sec/invoices/BusinessGrows";
import InvoiceManagement from "../../components/section/payment-sec/invoices/InvoiceManagement";
import InvoicesWork from "../../components/section/payment-sec/invoices/InvoicesWork";
import MaximizeOpportunities from "../../components/section/payment-sec/invoices/MaximizeOpportunities";
import PioneeringMerchants from "../../components/section/payment-sec/invoices/PioneeringMerchants";
import QuickerCompensation from "../../components/section/payment-sec/invoices/QuickerCompensation";

const Invoices = () => {
    return (
        <>
            <InvoiceManagement />
            <PioneeringMerchants />
            <InvoicesWork />
            <MaximizeOpportunities />
            <QuickerCompensation />
            <BusinessGrows />
        </>
    );
};

export default Invoices;
