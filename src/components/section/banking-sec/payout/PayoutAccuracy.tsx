import { Box, Container } from "@mui/material";
import ImageTextLayout from "../../../layout/ImageTextLayout";
import { payoutAccuracyOption } from "../../../../constant/bankingOptions";

const PayoutAccuracy = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="xl">
                <ImageTextLayout
                    title="Constructing pathways to payout accuracy phenomenally"
                    subtitle="At [Website Name], we understand the paramount importance of executing prompt and smooth payouts to cultivate strong relationships with your customers, partners, and employees. Our Payout Services are meticulously crafted to streamline your financial transactions, ensuring not only efficiency but also showcasing your unwavering reliability."
                    options={payoutAccuracyOption}
                    reverse={true}
                >
                    Image
                </ImageTextLayout>
            </Container>
        </Box>
    );
};

export default PayoutAccuracy;
