import { Container } from "@mui/material";
import FeatureLayout from "../../../layout/FeatureLayout";
import { PeerlessNetworkingOption } from "../../../../constant/featureOptions";
import { Card } from "../../../../assets/images";

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
                <img
                    src={Card}
                    style={{
                        rotate: "-90deg",
                        height: 230,
                        position: "absolute",
                        top: 50,
                    }}
                    alt="card"
                />
            </FeatureLayout>
        </Container>
    );
};

export default PeerlessNetworking;
