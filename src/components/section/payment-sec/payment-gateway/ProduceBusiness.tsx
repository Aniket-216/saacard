import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
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

export default ProduceBusiness;
