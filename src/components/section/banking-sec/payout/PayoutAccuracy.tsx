import { Box, Container } from "@mui/material";
import ImageTextLayout from "../../../layout/ImageTextLayout";
import { payoutAccuracyOption } from "../../../../constant/bankingOptions";
import { AboutTwo } from "../../../../assets";
import { motion } from "motion/react";

const PayoutAccuracy = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="lg">
                <ImageTextLayout
                    title="Constructing pathways to payout accuracy phenomenally"
                    subtitle="At [Website Name], we understand the paramount importance of executing prompt and smooth payouts to cultivate strong relationships with your customers, partners, and employees. Our Payout Services are meticulously crafted to streamline your financial transactions, ensuring not only efficiency but also showcasing your unwavering reliability."
                    options={payoutAccuracyOption}
                    reverse={true}
                >
                    <motion.img
                        src={AboutTwo}
                        alt="about-two"
                        style={{
                            borderRadius: "30px",
                        }}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    />
                </ImageTextLayout>
            </Container>
        </Box>
    );
};

export default PayoutAccuracy;
