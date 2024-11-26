import { Box, Container } from "@mui/material";
import { diverseIndustriesOption } from "../../../../constant/featureOptions";
import { Mobile, MonthlyPaymentStatus, SavingGrowth } from "../../../../assets";
import FeatureLayout from "../../../layout/FeatureLayout";

const DiverseIndustries = () => {
    return (
        <Box sx={{ my: 20 }}>
            <Container maxWidth="xl">
                <FeatureLayout
                    heading="An Intelligent Solution Suitable for Diverse Industries"
                    subheading="Never Lose a Sale Again. [Website Name] Payment Processing Enhances Customer Service Through Efficient Tools and Integrations"
                    OPTIONS={diverseIndustriesOption}
                    reverse={true}
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
                            bottom: "70px",
                            right: "80px",
                            height: "250px",
                        }}
                    />
                </FeatureLayout>
            </Container>
        </Box>
    );
};

export default DiverseIndustries;
