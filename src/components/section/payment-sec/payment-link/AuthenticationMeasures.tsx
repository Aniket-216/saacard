import { Box, Container } from "@mui/material";
import FeatureLayout from "../../../layout/FeatureLayout";
import { authenticationMeasuresOption } from "../../../../constant/featureOptions";
import { Mobile, MonthlyPaymentStatus, SavingGrowth } from "../../../../assets";

const AuthenticationMeasures = () => {
    return (
        <Box sx={{ my: 20 }}>
            <Container maxWidth="xl">
                <FeatureLayout
                    heading="Balanced Convenience With Encrypted Authentication Measures"
                    subheading="We efficiently authenticate transaction links, customizing routing based on your business's regulation types, risk assessments, and policies, while requiring minimal customer input."
                    OPTIONS={authenticationMeasuresOption}
                    childrenStyleProps={{
                        height: "100%",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src={Mobile}
                        style={{
                            position: "absolute",
                        }}
                    />
                    <img
                        src={SavingGrowth}
                        style={{
                            position: "absolute",
                            top: "5px",
                            left: "100px",
                        }}
                    />
                    <img
                        src={MonthlyPaymentStatus}
                        style={{
                            position: "absolute",
                            bottom: "110px",
                            right: "80px",
                            height: "250px",
                        }}
                    />
                </FeatureLayout>
            </Container>
        </Box>
    );
};

export default AuthenticationMeasures;
