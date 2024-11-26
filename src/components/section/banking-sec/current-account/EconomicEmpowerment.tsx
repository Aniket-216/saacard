import { Box, Container } from "@mui/material";
import FeatureLayout from "../../../layout/FeatureLayout";
import { Mobile } from "../../../../assets";
import { economicEmpowermentOption } from "../../../../constant/featureOptions";

const EconomicEmpowerment = () => {
    return (
        <Box sx={{ my: 20 }}>
            <Container maxWidth="xl">
                <FeatureLayout
                    heading="Crafting Technical Innovations for Economic Empowerment"
                    subheading="Where cutting-edge technology propels your financial future into the next dimension, empowering Financial Intelligence."
                    OPTIONS={economicEmpowermentOption}
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

export default EconomicEmpowerment;
