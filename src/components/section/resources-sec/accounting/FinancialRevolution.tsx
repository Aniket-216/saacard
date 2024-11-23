import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Dashboard } from "../../../../assets/images";

const FinancialRevolution = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid size={{ md: 6 }}>
                        <Stack>
                            <Typography variant="h1">
                                Begin your financial revolution with (website
                                name)
                            </Typography>
                            <Typography component={"p"} variant="subtitle1">
                                Reimagine accounting for enterprises with the
                                help of (website name). Our expert accountants
                                do more than compute numbers; we provide
                                strategic financial insights that empower the
                                growth of your business.
                            </Typography>
                            <Box>
                                <Button variant="contained">Contact Us</Button>
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

export default FinancialRevolution;
