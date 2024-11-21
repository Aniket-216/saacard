import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const InvoiceManagement = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid size={{ md: 6 }}>
                        <Stack>
                            <Typography variant="h1">
                                Bringing Accuracy to the Forefront of Invoice
                                Management
                            </Typography>
                            <Typography component={"p"} variant="subtitle1">
                                Our invoicing platform is meticulously crafted
                                to transform your company&apos;s billing process
                                into a logical, efficient, and secure
                                experience. We merge simplicity, effectiveness,
                                and safety into one cohesive solution for you.
                            </Typography>
                            <Box>
                                <Button variant="contained">Sign In</Button>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid size={{ md: 6 }}>Image</Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default InvoiceManagement;
