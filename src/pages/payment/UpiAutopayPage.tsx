import AcceleratePayment from "../../components/section/payment-sec/upi-autopay/AcceleratePayment";
import DigitalPayments from "../../components/section/payment-sec/upi-autopay/DigitalPayments";
import RecurringPayment from "../../components/section/payment-sec/upi-autopay/RecurringPayment";
import UPIAutopayFeature from "../../components/section/payment-sec/upi-autopay/UPIAutopayFeature";

const UpiAutopay = () => {
    return (
        <>
            <AcceleratePayment />
            <UPIAutopayFeature />
            <RecurringPayment />
            <DigitalPayments />
        </>
    );
};

export default UpiAutopay;
