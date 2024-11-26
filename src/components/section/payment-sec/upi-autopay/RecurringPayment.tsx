import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeatureCard from "../../../cards/FeatureCard";
import {
    AccurateCostEstimation,
    AutomatedBilling,
    CustomerPurchaseManagement,
    DeliveryTracking,
    EfficientOrderFulfillment,
    SecurePaymentHandling,
} from "../../../../assets";

const recurringPayment = [
    {
        icon: (
            <CustomerPurchaseManagement
                height={34}
                width={34}
                color="#6f00eb"
            />
        ),
        title: "Customer Purchase Management",
        subtitle:
            "Simplify order acceptance and management to enhance customer satisfaction and operational efficiency.",
    },
    {
        icon: <AccurateCostEstimation height={34} width={34} color="#6f00eb" />,
        title: "Accurate Cost Estimation",
        subtitle:
            "Provide precise cost estimates for potential orders, boosting transparency and trust in pricing.",
    },
    {
        icon: (
            <EfficientOrderFulfillment height={34} width={34} color="#6f00eb" />
        ),
        title: "Efficient Order Fulfillment",
        subtitle:
            "Optimize sales order processing and transactions for swift, error-free order completion.",
    },
    {
        icon: <DeliveryTracking height={34} width={34} color="#6f00eb" />,
        title: "Delivery Tracking",
        subtitle:
            "Monitor product or service deliveries meticulously, ensuring timely and reliable service.",
    },
    {
        icon: <AutomatedBilling height={34} width={34} color="#6f00eb" />,
        title: "Automated Billing",
        subtitle:
            "Streamline invoice creation and billing processes, making financial transactions hassle-free and secure.",
    },
    {
        icon: <SecurePaymentHandling height={34} width={34} color="#6f00eb" />,
        title: "Secure Payment Handling",
        subtitle:
            "Prioritize transaction and payment security, safeguarding sensitive financial information for peace of mind.",
    },
];

const RecurringPayment = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="lg">
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
                                        icon={pay.icon}
                                        heading={pay.title}
                                        subheading={pay.subtitle}
                                        headVariant="h6"
                                        subHeadingVariant="body1"
                                        iconStyleProps={{
                                            backgroundColor:
                                                "rgba(111, 0, 235, .1)",
                                            width: "50px",
                                            height: "50px",
                                            borderRadius: "50%",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                        cardStyleProps={{
                                            backgroundColor: "#faf5ff",
                                            borderRadius: "30px",
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
