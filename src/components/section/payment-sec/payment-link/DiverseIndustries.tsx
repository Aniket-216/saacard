import { Box, Container } from "@mui/material";
import { diverseIndustriesOption } from "../../../../constant/featureOptions";
import { Mobile } from "../../../../assets/images";
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
                >
                    <img
                        src={Mobile}
                        style={{
                            position: "absolute",
                        }}
                    />
                </FeatureLayout>
            </Container>
        </Box>
    );
};

export default DiverseIndustries;
