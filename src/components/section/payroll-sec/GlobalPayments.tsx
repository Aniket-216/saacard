import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { CardThree } from "../../../assets/images";

const GlobalPayments = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid size={{ md: 7 }}>
                        <div>
                            <img src={CardThree} alt="card-three" />
                            <div></div>
                        </div>
                    </Grid>
                    <Grid size={{ md: 5 }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                                textAlign: "end",
                                gap: 2,
                            }}
                        >
                            <Typography variant="h3">
                                Bringing Global Payments Through a Unified
                                Standard
                            </Typography>
                            <Typography component={"p"}>
                                Venturing into uncharted payment territory,
                                (Website Name) pioneers a path that merges
                                cutting-edge technology with unwavering
                                financial security, shaping a payment landscape
                                poised for a transformative tomorrow.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default GlobalPayments;
