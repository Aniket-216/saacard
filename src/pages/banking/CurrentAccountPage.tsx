import EconomicCompanies from "../../components/section/banking-sec/current-account/EconomicCompanies";
import EconomicEmpowerment from "../../components/section/banking-sec/current-account/EconomicEmpowerment";
import JourneyToProsperity from "../../components/section/banking-sec/current-account/JourneyToProsperity";
import PreciseAccountability from "../../components/section/banking-sec/current-account/PreciseAccountability";
import SecureTransactions from "../../components/section/banking-sec/current-account/SecureTransactions";

const CurrentAccountPage = () => {
    return (
        <>
            <PreciseAccountability />
            <JourneyToProsperity />
            <EconomicEmpowerment />
            <EconomicCompanies />
            <SecureTransactions />
        </>
    );
};

export default CurrentAccountPage;
