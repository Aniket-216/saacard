import HomeBanner from "../components/section/home-sec/HomeBanner";
import AppIntegrations from "../components/section/home-sec/AppIntegrations";
import Feature from "../components/section/home-sec/Feature";
import WhyUs from "../components/section/home-sec/WhyUs";
// import SimpleSteps from "../components/section/home-sec/SimpleSteps";
import PayrollShort from "../components/section/home-sec/PayrollShort";
import ShortService from "../components/section/home-sec/ShortService";
import ToolIntegration from "../components/section/home-sec/ToolIntegration";
import ShortGstService from "../components/section/home-sec/ShortGstService";

const HomePage = () => {
    return (
        <div>
            <HomeBanner />
            <AppIntegrations />
            <Feature />
            <WhyUs />
            {/* <SimpleSteps /> */}
            <PayrollShort />
            <ShortService />
            <ToolIntegration />
            <ShortGstService />
        </div>
    );
};

export default HomePage;
