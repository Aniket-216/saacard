import { Box, Container } from "@mui/material";
import ImageTextLayout from "../../../layout/ImageTextLayout";
import { financialSerenityOption } from "../../../../constant/bankingOptions";
import { AboutTwo } from "../../../../assets";
import { motion } from "motion/react";

const FinancialSerenity = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="lg">
                <ImageTextLayout
                    title="Your Express Lane to Financial Serenity"
                    subtitle="[Website Name] offers versatile payout solutions tailored to your business, whether it's a nimble small venture or a complex enterprise. Our offerings encompass fast, self-serve payouts for smaller businesses, along with fully customizable, enterprise-grade integrations, catering to the distinct requirements of your operation."
                    options={financialSerenityOption}
                >
                    <motion.img
                        src={AboutTwo}
                        alt="about-two"
                        style={{
                            borderRadius: "30px",
                        }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    />
                </ImageTextLayout>
            </Container>
        </Box>
    );
};

export default FinancialSerenity;
