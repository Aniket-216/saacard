import { Box, Container, Stack, Typography } from "@mui/material";
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
        <Box sx={{ position: "relative", mb: 4 }}>
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={4}
                // alignItems="center"
                // justifyContent="flex-start"
            >
                {/* Title and Subtitle */}
                <Stack
                    spacing={1}
                    sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}
                >
                    <Typography variant="h5"> {`0${id}.`}</Typography>
                    <Typography variant="h6" fontWeight="bold">
                        {title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        {subtitle}
                    </Typography>
                </Stack>
            </Stack>
            {/* Dashed Arrow */}
            {id < paymentFlowOption.length && <DashedCurvedArrow />}
        </Box>
    );
};

const SmartWayLinks = () => {
    return (
        <Box sx={{ my: 10 }}>
            <BgColorLayout styleProps={{ py: 10 }}>
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
                            {paymentFlowOption.map((option) => (
                                <PaymentFlow key={option.id} {...option} />
                            ))}
                        </Stack>
                    </Stack>
                </Container>
            </BgColorLayout>
        </Box>
    );
};

export default SmartWayLinks;
