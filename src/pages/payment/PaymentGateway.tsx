import ConvenienceConnection from "../../components/section/payment-sec/payment-gateway/ConvenienceConnection";
import FinancialSuccess from "../../components/section/payment-sec/payment-gateway/FinancialSuccess";
import GatewayMagic from "../../components/section/payment-sec/payment-gateway/GatewayMagic";
import PeerlessNetworking from "../../components/section/payment-sec/payment-gateway/PeerlessNetworking";
import ProduceBusiness from "../../components/section/payment-sec/payment-gateway/ProduceBusiness";

const PaymentGateway = () => {
    return (
        <>
            <ConvenienceConnection />
            <FinancialSuccess />
            <GatewayMagic />
            <ProduceBusiness />
            <PeerlessNetworking />
        </>
    );
};

export default PaymentGateway;
