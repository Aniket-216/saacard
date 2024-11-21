import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeatureCard from "../../../cards/FeatureCard";

const recurringPayment = [
    {
        title: "Customer Purchase Management",
        subtitle:
            "Simplify order acceptance and management to enhance customer satisfaction and operational efficiency.",
    },
    {
        title: "Accurate Cost Estimation",
        subtitle:
            "Provide precise cost estimates for potential orders, boosting transparency and trust in pricing.",
    },
    {
        title: "Efficient Order Fulfillment",
        subtitle:
            "Optimize sales order processing and transactions for swift, error-free order completion.",
    },
    {
        title: "Delivery Tracking",
        subtitle:
            "Monitor product or service deliveries meticulously, ensuring timely and reliable service.",
    },
    {
        title: "Automated Billing",
        subtitle:
            "Streamline invoice creation and billing processes, making financial transactions hassle-free and secure.",
    },
    {
        title: "Secure Payment Handling",
        subtitle:
            "Prioritize transaction and payment security, safeguarding sensitive financial information for peace of mind.",
    },
];

const RecurringPayment = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid size={{ lg: 12 }}>
                        <Stack
                            spacing={2}
                            sx={{
                                width: "50%",
                                marginLeft: "auto",
                                marginRight: "auto",
                                textAlign: "center",
                            }}
                        >
                            <Typography variant="h4">
                                Blend UPI&apos;s Popularity with Recurring
                                Payment Convenience
                            </Typography>
                            <Typography variant="subtitle1">
                                Supported by the robust [Website Name] engine,
                                UPI AutoPay seamlessly integrates and offers a
                                myriad of advanced features, setting it apart as
                                a top-tier product in the market
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ lg: 12 }}>
                        <Grid container spacing={2}>
                            {recurringPayment.map((pay, index) => (
                                <Grid
                                    key={index}
                                    size={{ sm: 12, md: 6, lg: 4 }}
                                >
                                    <FeatureCard
                                        icon="icon"
                                        heading={pay.title}
                                        subheading={pay.subtitle}
                                        headVariant="h6"
                                        cardStyleProps={{
                                            backgroundColor: "#faf5ff",
                                            borderRadius: "30px",
                                            padding: "20px",
                                        }}
                                        cardContentStyleProps={{
                                            textAlign: "center",
                                        }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default RecurringPayment;
