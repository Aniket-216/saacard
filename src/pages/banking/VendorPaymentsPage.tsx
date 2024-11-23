import PaymentSolutionsContent from "../../components/section/banking-sec/vendor-payment/PaymentSolutionsContent";
import PerfectingBusinesses from "../../components/section/banking-sec/vendor-payment/PerfectingBusinesses";
import StreamlinedInvoices from "../../components/section/banking-sec/vendor-payment/StreamlinedInvoices";
import VendorPayments from "../../components/section/banking-sec/vendor-payment/VendorPayments";

const VendorPaymentsPage = () => {
    return (
        <>
            <VendorPayments />
            <PerfectingBusinesses />
            <PaymentSolutionsContent />
            <StreamlinedInvoices />
        </>
    );
};

export default VendorPaymentsPage;
