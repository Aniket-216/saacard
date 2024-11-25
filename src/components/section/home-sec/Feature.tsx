import { Container } from "@mui/material";
import { featureTools } from "../../../constant/featureOptions";
import FeatureLayout from "../../layout/FeatureLayout";
import {
    Card,
    CashFlow,
    PaymentReceived,
    Transaction,
} from "../../../assets/images";

const Feature = () => {
    return (
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
                        left: "60px",
                    }}
                />
                <img
                    src={Transaction}
                    style={{
                        position: "absolute",
                        top: "100px",
                    }}
                />
                <img
                    src={PaymentReceived}
                    style={{
                        position: "absolute",
                        top: "100px",
                    }}
                />
            </FeatureLayout>
        </Container>
    );
};

export default Feature;
