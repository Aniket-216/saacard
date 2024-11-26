import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BgColorLayout from "../../../layout/BgColorLayout";
import { CardThree, MobileFive } from "../../../../assets";

const MaximizeOpportunities = () => {
    const theme = useTheme();
    return (
        <Box sx={{ my: 10 }}>
            <BgColorLayout
                bgcolor="#110d34"
                height="auto"
                styleProps={{ overflow: "hidden", py: 10 }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={2}>
                        <Grid size={{ md: 6 }}>
                            <Stack
                                sx={{
                                    height: "100%",
                                    borderRadius: "16px", // Optional for rounded corners
                                    position: "relative",
                                }}
                            >
                                <img
                                    src={MobileFive}
                                    alt="mobile-five"
                                    style={{
                                        position: "absolute",
                                        height: "600px",
                                        zIndex: 1,
                                    }}
                                />
                                <img
                                    src={CardThree}
                                    alt="mobile-five"
                                    style={{
                                        position: "absolute",
                                        height: "330px",
                                        zIndex: 0,
                                        right: 170,
                                        bottom: -160,
                                    }}
                                />
                            </Stack>
                        </Grid>
                        <Grid size={{ md: 6 }}>
                            <Stack
                                spacing={4}
                                sx={{
                                    height: "100%",
                                    justifyContent: "center",
                                }}
                            >
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

export default MaximizeOpportunities;
