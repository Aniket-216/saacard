import { Box, Container } from "@mui/material";
import FeatureLayout from "../../../layout/FeatureLayout";
import { PeerlessNetworkingOption } from "../../../../constant/featureOptions";
import {
    Card,
    CashFlow,
    PaymentReceived,
    Transaction,
} from "../../../../assets";

const PeerlessNetworking = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="xl">
                <FeatureLayout
                    heading="Peerless Networking Opportunities Open to All"
                    subheading={
                        "Make payment integration into [website Name] a breeze with our comprehensive SDKs, RESTful APIs, and versatile plugins, supporting all major platforms and programming languages for a mind-blowing experience"
                    }
                    OPTIONS={PeerlessNetworkingOption}
                    childrenStyleProps={{
                        height: "100%",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src={Card}
                        style={{
                            rotate: "-90deg",
                        }}
                    />
                    <img
                        src={CashFlow}
                        style={{
                            position: "absolute",
                            top: "5px",
                            left: "130px",
                        }}
                    />
                    <img
                        src={Transaction}
                        style={{
                            position: "absolute",
                            bottom: "150px",
                            right: "-25px",
                            height: "250px",
                        }}
                    />
                    <img
                        src={PaymentReceived}
                        style={{
                            position: "absolute",
                            bottom: "90px",
                            left: "110px",
                        }}
                    />
                </FeatureLayout>
            </Container>
        </Box>
    );
};

export default PeerlessNetworking;
