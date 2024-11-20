import AffordablePricing from "../components/section/pricing-sec/AffordablePricing";
import PaymentWorriesFortress from "../components/section/pricing-sec/PaymentWorriesFortress";
import PricingComparison from "../components/section/pricing-sec/PricingComparison";
import SubscribeNewsletter from "../components/section/pricing-sec/SubscribeNewsletter";

const PricingPage = () => {
    return (
        <>
            <AffordablePricing />
            <PaymentWorriesFortress />
            <PricingComparison />
            <SubscribeNewsletter />
        </>
    );
};

export default PricingPage;
