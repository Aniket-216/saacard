import { Container } from "@mui/material";
import FeatureLayout from "../../../layout/FeatureLayout";
import { PeerlessNetworkingOption } from "../../../../constant/featureOptions";

const PeerlessNetworking = () => {
    return (
        <Container maxWidth="xl">
            <FeatureLayout
                heading="Peerless Networking Opportunities Open to All"
                subheading={
                    "Make payment integration into [website Name] a breeze with our comprehensive SDKs, RESTful APIs, and versatile plugins, supporting all major platforms and programming languages for a mind-blowing experience"
                }
                OPTIONS={PeerlessNetworkingOption}
            >
                Image
            </FeatureLayout>
        </Container>
    );
};

export default PeerlessNetworking;
