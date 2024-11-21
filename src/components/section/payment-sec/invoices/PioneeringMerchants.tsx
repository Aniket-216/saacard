import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BgColorLayout from "../../../layout/BgColorLayout";

const PioneeringMerchants = () => {
    const theme = useTheme();
    return (
        <Box sx={{ my: 10 }}>
            <BgColorLayout
                height="auto"
                styleProps={{ backgroundColor: "#110d34", py: 15 }}
            >
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid size={{ md: 6 }}>Image</Grid>
                        <Grid size={{ md: 6 }}>
                            <Stack spacing={2}>
                                <Typography
                                    variant="h3"
                                    color={theme.palette.common.white}
                                >
                                    Pioneering Merchants Mission Delighted for
                                    Every Customers
                                </Typography>
                                <Stack>
                                    <Typography
                                        variant="subtitle1"
                                        color={theme.palette.common.white}
                                    >
                                        We prioritize transparency and
                                        convenience for your customers.
                                        Moreover, our invoices go beyond
                                        functionality; they serve as an
                                        extension of your brand&apos;s identity.
                                        We create visually appealing, customized
                                        invoices that resonate with your
                                        brand&apos;s aesthetics and language,
                                        enhancing the overall purchasing
                                        experience for your consumers.
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        color={theme.palette.common.white}
                                    >
                                        Our platform offers a comprehensive
                                        breakdown of charges, encompassing
                                        pricing details, tax calculations, and
                                        any eligible discounts. Through our
                                        seamless online payment system, you not
                                        only deliver precise transaction
                                        information but also expedite access to
                                        funds, ensuring smoother financial
                                        transactions.
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </BgColorLayout>
        </Box>
    );
};

export default PioneeringMerchants;
