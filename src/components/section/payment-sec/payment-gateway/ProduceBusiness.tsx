import { Box, Container, Stack, Typography } from "@mui/material";
import BgColorLayout from "../../../layout/BgColorLayout";
import DashedCurvedArrow from "../../../shapes/DashedCurvedArrow";

interface PaymentFlowOptionProp {
    id: number;
    title: string;
    subtitle: string;
}

const paymentFlowOption: PaymentFlowOptionProp[] = [
    {
        id: 1,
        title: "Unified Payment Flow",
        subtitle:
            "Experience a frictionless payment journey from start to finish. [Website Name] optimizes payment processing, ensuring a smooth, secure, and efficient experience.",
    },
    {
        id: 2,
        title: "Transparent Payment Tracking",
        subtitle:
            "Gain complete visibility into payment transactions. That offers real-time tracking, enabling you to monitor payment statuses, authorizations, rejections, and  enhancing control.",
    },
    {
        id: 3,
        title: "Fortified Payment Protection",
        subtitle:
            "Elevate payment security within the workflow. Implement robust encryption, multi-factor authentication, and fraud prevention mechanisms to fortify financial data protection",
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

const ProduceBusiness = () => {
    return (
        <Box sx={{ my: 10 }}>
            <BgColorLayout styleProps={{ py: 10 }}>
                <Container maxWidth="lg">
                    <Stack spacing={6}>
                        {/* Header */}
                        <Stack textAlign="center">
                            <Typography variant="h3" fontWeight="bold">
                                Binded Technology In a Scale To Produce Business
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

export default ProduceBusiness;
