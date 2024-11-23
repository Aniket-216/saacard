import AccountFinance from "../../components/section/resources-sec/accounting/AccountFinance";
import BetterGrowth from "../../components/section/resources-sec/accounting/BetterGrowth";
import FinancialRevolution from "../../components/section/resources-sec/accounting/FinancialRevolution";
import LeadWealth from "../../components/section/resources-sec/accounting/LeadWealth";
import SimplifyingNumbers from "../../components/section/resources-sec/accounting/SimplifyingNumbers";

const AccountingPage = () => {
    return (
        <>
            <FinancialRevolution />
            <LeadWealth />
            <BetterGrowth />
            <AccountFinance />
            <SimplifyingNumbers />
        </>
    );
};

export default AccountingPage;
