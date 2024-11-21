import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const BusinessGrows = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid size={{ lg: 12 }}>
                        <Stack>
                            <Typography variant="h3">
                                Where Invoices Thrive and Business Grows Strong
                            </Typography>
                            <Typography component={"p"} variant="subtitle1">
                                Leverage our integrated platform for sending
                                polished invoices, securing instant payments,
                                and streamlining your business operations with
                                ease and efficiency
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ lg: 12 }}></Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default BusinessGrows;
