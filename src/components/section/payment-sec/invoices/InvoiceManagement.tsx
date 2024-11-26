import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Card, Dashboard, DashboardOne } from "../../../../assets";

const InvoiceManagement = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ md: 6 }}>
                        <Stack spacing={2}>
                            <Typography variant="h2">
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
                    <Grid size={{ md: 6 }}>
                        <Stack
                            height={"100%"}
                            justifyContent={"center"}
                            sx={{
                                position: "relative",
                            }}
                        >
                            <img
                                src={Dashboard}
                                alt="dashboard"
                                style={{ position: "absolute", right: -100 }}
                            />
                            <img
                                src={Card}
                                alt="dashboard"
                                style={{
                                    position: "absolute",
                                    height: 180,
                                    bottom: 0,
                                }}
                            />
                            <img
                                src={DashboardOne}
                                alt="dashboard"
                                style={{
                                    position: "absolute",
                                    height: 340,
                                    right: -240,
                                    bottom: 0,
                                }}
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default InvoiceManagement;
