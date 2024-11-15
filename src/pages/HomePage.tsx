import HomeBanner from "../components/Section/home-sec/HomeBanner";
import AppIntegrations from "../components/Section/home-sec/AppIntegrations";
import Feature from "../components/Section/home-sec/Feature";
import WhyUs from "../components/Section/home-sec/WhyUs";
import SimpleSteps from "../components/Section/home-sec/SimpleSteps";
import PayrollShort from "../components/Section/home-sec/PayrollShort";
import ShortService from "../components/Section/home-sec/ShortService";
import ToolIntegration from "../components/Section/home-sec/ToolIntegration";
import ShortGstService from "../components/Section/home-sec/ShortGstService";

const HomePage = () => {
    return (
        <div>
            <HomeBanner />
            <AppIntegrations />
            <Feature />
            <WhyUs />
            <SimpleSteps />
            <PayrollShort />
            <ShortService />
            <ToolIntegration />
            <ShortGstService />
        </div>
    );
};

export default HomePage;
