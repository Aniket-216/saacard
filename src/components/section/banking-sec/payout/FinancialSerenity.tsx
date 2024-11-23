import { Box, Container } from "@mui/material";
import ImageTextLayout from "../../../layout/ImageTextLayout";
import { financialSerenityOption } from "../../../../constant/bankingOptions";

const FinancialSerenity = () => {
    return (
        <Box sx={{ mb: 10 }}>
            <Container maxWidth="xl">
                <ImageTextLayout
                    title="Your Express Lane to Financial Serenity"
                    subtitle="[Website Name] offers versatile payout solutions tailored to your business, whether it's a nimble small venture or a complex enterprise. Our offerings encompass fast, self-serve payouts for smaller businesses, along with fully customizable, enterprise-grade integrations, catering to the distinct requirements of your operation."
                    options={financialSerenityOption}
                >
                    Image
                </ImageTextLayout>
            </Container>
        </Box>
    );
};

export default FinancialSerenity;
