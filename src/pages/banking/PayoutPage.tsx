import EvolvingTransactions from "../../components/section/banking-sec/payout/EvolvingTransactions";
import ExceptionalSupport from "../../components/section/banking-sec/payout/ExceptionalSupport";
import FinancialSerenity from "../../components/section/banking-sec/payout/FinancialSerenity";
import PayoutAccuracy from "../../components/section/banking-sec/payout/PayoutAccuracy";
import PayoutProdigy from "../../components/section/banking-sec/payout/PayoutProdigy";
import ReliablePayouts from "../../components/section/banking-sec/payout/ReliablePayouts";

const PayoutPage = () => {
    return (
        <>
            <FinancialSerenity />
            <PayoutAccuracy />
            <PayoutProdigy />
            <ReliablePayouts />
            <ExceptionalSupport />
            <EvolvingTransactions />
        </>
    );
};

export default PayoutPage;
