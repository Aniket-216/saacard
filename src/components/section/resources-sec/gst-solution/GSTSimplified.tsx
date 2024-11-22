import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Dashboard } from "../../../../assets/images";

const GSTSimplified = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid size={{ md: 6 }}>
                        <Stack>
                            <Stack flexDirection={"row"}>
                                <Box>.</Box>
                                <Typography>GST Simplified</Typography>
                            </Stack>
                            <Typography variant="h1">
                                On the Road to Tax Efficiency
                            </Typography>
                            <Typography component={"p"} variant="subtitle1">
                                Simplify your GST compliance with our integrated
                                solutions. We offer user-friendly tools and
                                expert guidance to ensure accurate and
                                hassle-free tax submissions. Gain insights into
                                your tax liabilities and transactions with
                                real-time reporting.
                            </Typography>
                            <Box>
                                <Button variant="contained">Pricing</Button>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid size={{ md: 6 }}>
                        <img src={Dashboard} alt="dashboard" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default GSTSimplified;
