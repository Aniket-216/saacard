import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DashedCurvedArrow from "../../../shapes/DashedCurvedArrow";
import BgColorLayout from "../../../layout/BgColorLayout";

interface PaymentFlowOptionProp {
    id: number;
    title: string;
    subtitle: string;
}

const paymentFlowOption: PaymentFlowOptionProp[] = [
    {
        id: 1,
        title: "Crafting Your Payment Link",
        subtitle:
            "Create payment links effortlessly via our API or Dashboard, complete with free reminders to keep your transactions on track.",
    },
    {
        id: 2,
        title: "Sharing Customer Contact Details",
        subtitle:
            "Easily share the payment link with your customers through various channels like SMS, WhatsApp, and Email.",
    },
    {
        id: 3,
        title: "Payment Acceptance Made Easy",
        subtitle:
            "Stay in the loop with real-time notifications, ensuring you receive payments swiftly and efficiently.",
    },
];

const PaymentFlow = ({ id, title, subtitle }: PaymentFlowOptionProp) => {
    return (
        <>
            <Grid
                size={{ md: 4 }}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Stack spacing={1}>
                    <Typography variant="h5" color="#6f00eb">
                        {`0${id}.`}
                    </Typography>
                    <Typography variant="h6" fontWeight="bold">
                        {title}
                    </Typography>
                    <Typography variant="body1">{subtitle}</Typography>
                </Stack>
            </Grid>
            <Grid
                size={{ md: 4 }}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            ></Grid>
            <Grid
                size={{ md: 4 }}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            ></Grid>

            <Grid size={{ md: 4 }}>
                <Stack alignItems={"center"}>
                    {id < paymentFlowOption.length && <DashedCurvedArrow />}
                </Stack>
            </Grid>
        </>
    );
};

const SmartWayLinks = () => {
    return (
        <Box sx={{ my: 10 }}>
            <BgColorLayout height="auto" styleProps={{ py: 10 }}>
                <Container maxWidth="lg">
                    <Stack spacing={6}>
                        {/* Header */}
                        <Stack spacing={2} textAlign="center">
                            <Typography variant="h3" fontWeight="bold">
                                Pay the smart way with links.
                            </Typography>
                            <Typography component={"p"} variant="subtitle1">
                                For D2C brands leveraging social media sales,
                                customize your checkout with brand logo, colors,
                                and style, ensuring instant payments through
                                links.
                            </Typography>
                        </Stack>

                        {/* Steps */}
                        <Stack sx={{ mt: 4 }}>
                            <Grid container spacing={3}>
                                {paymentFlowOption.map((option) => (
                                    <PaymentFlow key={option.id} {...option} />
                                ))}
                            </Grid>
                        </Stack>
                    </Stack>
                </Container>
            </BgColorLayout>
        </Box>
    );
};

export default SmartWayLinks;
