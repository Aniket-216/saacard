import { Box, Container } from "@mui/material";
import { featureTools } from "../../../constant/featureOptions";
import FeatureLayout from "../../layout/FeatureLayout";
import { Card, CashFlow, PaymentReceived, Transaction } from "../../../assets";

const Feature = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="xl">
                <FeatureLayout
                    heading="Equipping Pursuits With Essential Tools To Effortlessly Process"
                    subheading="Proficiency On Extraordinary Potential Of A Catalyst For Swift, Secure, And Seamless Online Transactions. A New Era Of Efficiency And Customer Satisfaction Today"
                    OPTIONS={featureTools}
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
                            bottom: "130px",
                            left: "110px",
                        }}
                    />
                </FeatureLayout>
            </Container>
        </Box>
    );
};

export default Feature;
