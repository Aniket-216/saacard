import { Box, Container } from "@mui/material";
import FeatureLayout from "../../../layout/FeatureLayout";
import {
    Card,
    CashFlow,
    PaymentReceived,
    Transaction,
} from "../../../../assets";

const GatewayMagic = () => {
    return (
        <Box sx={{ my: 20 }}>
            <Container maxWidth="xl">
                <FeatureLayout
                    heading="Fusion Of Collection With Gateway Magic"
                    subheading={[
                        "The power of real-time data and invaluable insights at your fingertips. Make well-informed business decisions with ease as you gain access to crucial statistics. With the ability to monitor and analyze your data, ensuring that you are always in control and ready to act. Say goodbye to guesswork and hello to data-driven decisions.",
                        "Significance of efficiency is designed with your convenience in mind, ensuring that you can navigate it effortlessly. Enjoy a sharpest experience while managing your payments efficiently. Your satisfaction is our top priority, and we've made sure that every aspect of our platform reflects that commitment.",
                    ]}
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
                            top: "-80px",
                            left: "140px",
                        }}
                    />
                    <img
                        src={Transaction}
                        style={{
                            position: "absolute",
                            bottom: "70px",
                            right: "-25px",
                            height: "250px",
                        }}
                    />
                    <img
                        src={PaymentReceived}
                        style={{
                            position: "absolute",
                            bottom: "0px",
                            left: "110px",
                        }}
                    />
                </FeatureLayout>
            </Container>
        </Box>
    );
};

export default GatewayMagic;
