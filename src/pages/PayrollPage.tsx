import FinancialOdyssey from "../components/section/payroll-sec/FinancialOdyssey";
import GlobalPayments from "../components/section/payroll-sec/GlobalPayments";
import SwiftDelivery from "../components/section/payroll-sec/SwiftDelivery";
import TurbochargedGrowth from "../components/section/payroll-sec/TurbochargedGrowth";

const PayrollPage = () => {
    return (
        <>
            <FinancialOdyssey />
            <TurbochargedGrowth />
            <GlobalPayments />
            <SwiftDelivery />
        </>
    );
};

export default PayrollPage;
