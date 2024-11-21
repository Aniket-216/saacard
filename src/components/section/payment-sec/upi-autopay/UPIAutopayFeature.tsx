import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const UPIAutopayFeature = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Stack spacing={4}>
                            <Typography variant="h4" sx={{ mb: 2 }}>
                                Witness The Practicality Of UPI Autopay In
                                Action
                            </Typography>
                            <Typography
                                component={"p"}
                                variant="subtitle1"
                                sx={{ mb: 2 }}
                            >
                                Where clicks become whispers and confirmations
                                are instant. UPI Auto-pay, your digital
                                assistant for effortless payments. It&apos;s
                                like having your own personal payment butler,
                                always ready to settle bills, subscriptions, and
                                more with a wink and a nod.
                            </Typography>
                            <Typography
                                component={"p"}
                                variant="subtitle1"
                                sx={{ mb: 2 }}
                            >
                                Say goodbye to manual payments and hello to a
                                world of convenience. Our UPI Auto-pay
                                absolutely merges with your payment gateway,
                                creating a symphony of efficiency. where
                                innovation meets simplicity.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Stack spacing={4}>
                            <Typography variant="subtitle1">
                                Expand your customer base by reaching out to
                                those who don&apos;t possess a card, while
                                broadening your coverage by accommodating
                                savings, current, and overdraft accounts. By
                                offering flexible payment plans such as daily,
                                weekly, monthly,, or yearly options, you can
                                enhance conversion rates, making your products
                                or services more accessible.
                            </Typography>
                            <Typography variant="subtitle1">
                                Simultaneously, bolster trust in your brand
                                through transparency and flexibility. Provide
                                customers with full visibility into their plans
                                and upcoming debits, allowing them to pause
                                subscriptions when needed. This approach not
                                only fosters confidence but also demonstrates
                                your commitment to meeting individual customer
                                needs, setting you apart in the market.
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default UPIAutopayFeature;
