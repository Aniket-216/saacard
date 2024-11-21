import { Container, Stack, Typography, useTheme } from "@mui/material";
import BgColorLayout from "../../../layout/BgColorLayout";
import CountUp from "react-countup";

const AcceleratePayment = () => {
    const theme = useTheme();
    return (
        <BgColorLayout bgImage styleProps={{ marginBottom: 10 }}>
            <Container maxWidth="xl">
                <Stack spacing={4}>
                    <Stack spacing={1}>
                        <Typography
                            variant="h1"
                            color={theme.palette.common.white}
                        >
                            Accelerate Payment Delivery to Lightning Speed
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component={"p"}
                            color={theme.palette.common.white}
                        >
                            Users use major UPI apps to set up, manage, and
                            control auto-debit mandates for recurring payments,
                            with merchant approval.
                        </Typography>
                    </Stack>
                    <Stack flexDirection={"row"} columnGap={5}>
                        <Stack>
                            <Typography
                                variant="h4"
                                fontWeight="700"
                                color={theme.palette.common.white}
                            >
                                <CountUp start={0} end={100} />
                                M+
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color={theme.palette.common.white}
                            >
                                UPI users leverage auto-debit.
                            </Typography>
                        </Stack>
                        <Stack>
                            <Typography
                                variant="h4"
                                fontWeight="700"
                                color={theme.palette.common.white}
                            >
                                <CountUp start={0} end={50} />
                                K+
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color={theme.palette.common.white}
                            >
                                UPI users leverage auto-debit.
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </BgColorLayout>
    );
};

export default AcceleratePayment;
