import { Container } from "@mui/material";
import { featureTools } from "../../../constant/featureOptions";
import FeatureLayout from "../../Layout/FeatureLayout";

const Feature = () => {
    return (
        <Container maxWidth="xl">
            <FeatureLayout
                heading="Equipping Pursuits With Essential Tools To Effortlessly Process"
                subheading="Proficiency On Extraordinary Potential Of A Catalyst For Swift, Secure, And Seamless Online Transactions. A New Era Of Efficiency And Customer Satisfaction Today"
                OPTIONS={featureTools}
            >
                Image
            </FeatureLayout>
        </Container>
    );
};

export default Feature;
