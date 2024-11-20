import { Container, Divider, Stack, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BgColorLayout from "../layout/BgColorLayout";

const Footer = () => {
    const theme = useTheme();
    return (
        <footer>
            <BgColorLayout height="854px" bgcolor="#6f00eb">
                <Container maxWidth="xl">
                    <Stack spacing={10} py={10}>
                        <Stack textAlign={"center"} spacing={4}>
                            <Typography
                                variant="h3"
                                color={theme.palette.common.white}
                            >
                                We began in payments, but aspired for more. We
                                crafted a modern, in-house financial technology
                                platform.
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color={theme.palette.common.white}
                            >
                                [Website Name], an indigenous payment platform
                                originating in India, ensures effortless
                                integration within a single day.
                            </Typography>
                        </Stack>
                        <Divider />
                        <Grid container spacing={2} textAlign={"center"}>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Typography
                                    variant="h6"
                                    color={theme.palette.common.white}
                                >
                                    Menu
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Typography
                                    variant="h6"
                                    color={theme.palette.common.white}
                                >
                                    Quick links
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Typography
                                    variant="h6"
                                    color={theme.palette.common.white}
                                >
                                    Reach us
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider />
                    </Stack>
                </Container>
            </BgColorLayout>
        </footer>
    );
};

export default Footer;