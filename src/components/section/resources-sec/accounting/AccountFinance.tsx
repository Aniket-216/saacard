import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BgColorLayout from "../../../layout/BgColorLayout";
import { MobileFive } from "../../../../assets/images";

const AccountFinance = () => {
    const theme = useTheme();
    return (
        <Box sx={{ my: 10 }}>
            <BgColorLayout
                bgcolor="#110d34"
                height="auto"
                styleProps={{
                    py: 10,
                }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={2}>
                        <Grid size={{ md: 6 }}>
                            <img src={MobileFive} alt="mobile-five" />
                        </Grid>
                        <Grid size={{ md: 6 }}>
                            <Stack spacing={4}>
                                <Typography
                                    variant="h3"
                                    color={theme.palette.common.white}
                                >
                                    Maximize Your Opportunities with [Website
                                    Name] Invoices
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color={theme.palette.common.white}
                                >
                                    Explore a robust suite of payment solutions
                                    to effortlessly manage your business
                                    operations with unparalleled convenience.
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color={theme.palette.common.white}
                                >
                                    Your decision to join us ignites a spark of
                                    possibility. Together, we&apos;ll make a
                                    difference.
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </BgColorLayout>
        </Box>
    );
};

export default AccountFinance;
