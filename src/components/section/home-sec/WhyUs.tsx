import Grid from "@mui/material/Grid2";
import BgColorLayout from "../../layout/BgColorLayout";
import { Stack, Container, Divider, Typography, useTheme } from "@mui/material";
import CountUp from "react-countup";

const WhyUs = () => {
    const theme = useTheme();
    return (
        <BgColorLayout height="350px">
            <Container maxWidth="xl" sx={{ py: 0 }}>
                <Stack rowGap={4}>
                    <Grid container spacing={4}>
                        <Grid size={6}>
                            <Typography variant="h3">
                                New Profit Horizons With Peace Of Mind
                            </Typography>
                        </Grid>
                        <Grid size={6}>
                            <Typography component={"p"}>
                                We&apos;re reshaping the landscape of financial
                                transactions, pioneering innovation to redefine
                                the way commerce flows in the digital age. By
                                creating a future where commerce thrives in the
                                digital realm like never before.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container>
                        <Grid size={3}>
                            <Stack spacing={2} textAlign={"center"}>
                                <Typography
                                    variant="h4"
                                    fontWeight="700"
                                    color={theme.palette.secondary.main}
                                >
                                    <CountUp start={0} end={80} />%
                                </Typography>
                                <Typography variant="subtitle2">
                                    Automated Billing
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid size={3}>
                            <Stack spacing={2} textAlign={"center"}>
                                <Typography
                                    variant="h4"
                                    fontWeight="700"
                                    color={theme.palette.secondary.main}
                                >
                                    <CountUp start={0} end={68} />%
                                </Typography>
                                <Typography variant="subtitle2">
                                    Cross-Border Transactions
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid size={3}>
                            <Stack spacing={2} textAlign={"center"}>
                                <Typography
                                    variant="h4"
                                    fontWeight="700"
                                    color={theme.palette.secondary.main}
                                >
                                    <CountUp start={0} end={5} />
                                    M+
                                </Typography>
                                <Typography variant="subtitle2">
                                    Merchant Supports Globally
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid size={3}>
                            <Stack spacing={2} textAlign={"center"}>
                                <Typography
                                    variant="h4"
                                    fontWeight="700"
                                    color={theme.palette.secondary.main}
                                >
                                    <CountUp start={0} end={50} />+
                                </Typography>
                                <Typography variant="subtitle2">
                                    Integration Options
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </BgColorLayout>
    );
};

export default WhyUs;
