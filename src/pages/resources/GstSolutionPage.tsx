import GstCompanies from "../../components/section/resources-sec/gst-solution/GstCompanies";
import GSTSimplified from "../../components/section/resources-sec/gst-solution/GSTSimplified";
import TaxApproaches from "../../components/section/resources-sec/gst-solution/TaxApproaches";
import TaxExpertise from "../../components/section/resources-sec/gst-solution/TaxExpertise";
import TDSExpert from "../../components/section/resources-sec/gst-solution/TDSExpert";

const GstSolutionPage = () => {
    return (
        <>
            <GSTSimplified />
            <GstCompanies />
            <TaxApproaches />
            <TaxExpertise />
            <TDSExpert />
        </>
    );
};

export default GstSolutionPage;
