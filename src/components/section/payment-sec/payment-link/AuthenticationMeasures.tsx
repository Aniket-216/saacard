import { Box, Container } from "@mui/material";
import FeatureLayout from "../../../layout/FeatureLayout";
import { authenticationMeasuresOption } from "../../../../constant/featureOptions";
import { Mobile } from "../../../../assets/images";

const AuthenticationMeasures = () => {
    return (
        <Box sx={{ my: 20 }}>
            <Container maxWidth="xl">
                <FeatureLayout
                    heading="Balanced Convenience With Encrypted Authentication Measures"
                    subheading="We efficiently authenticate transaction links, customizing routing based on your business's regulation types, risk assessments, and policies, while requiring minimal customer input."
                    OPTIONS={authenticationMeasuresOption}
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

export default AuthenticationMeasures;
