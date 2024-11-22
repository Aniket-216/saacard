import AuthenticationMeasures from "../../components/section/payment-sec/payment-link/AuthenticationMeasures";
import DiverseIndustries from "../../components/section/payment-sec/payment-link/DiverseIndustries";
import EnergizingPayments from "../../components/section/payment-sec/payment-link/EnergizingPayments";
import LinkingProsperity from "../../components/section/payment-sec/payment-link/LinkingProsperity";
import LinkProfits from "../../components/section/payment-sec/payment-link/LinkProfits";
import SmartWayLinks from "../../components/section/payment-sec/payment-link/SmartWayLinks";
import SwiftPayments from "../../components/section/payment-sec/payment-link/SwiftPayments";

const PaymentLinks = () => {
    return (
        <>
            <LinkingProsperity />
            <LinkProfits />
            <AuthenticationMeasures />
            <DiverseIndustries />
            <EnergizingPayments />
            <SmartWayLinks />
            <SwiftPayments />
        </>
    );
};

export default PaymentLinks;
