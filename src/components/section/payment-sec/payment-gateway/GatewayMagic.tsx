import { Box, Container } from "@mui/material";
import FeatureLayout from "../../../layout/FeatureLayout";
import { Card } from "../../../../assets/images";

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
        </Box>
    );
};

export default GatewayMagic;
