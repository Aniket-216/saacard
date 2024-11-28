import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
    Card,
    CardBack,
    Maestro,
    MasterCard,
    Paypal,
    Visa,
} from "../../../../assets";
import { Circle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const GSTSimplified = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ my: 20 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid size={{ md: 6 }}>
                        <Stack spacing={1}>
                            <Stack flexDirection={"row"}>
                                <Stack
                                    flexDirection={"row"}
                                    columnGap={1}
                                    alignItems={"center"}
                                    color={"#6f00eb"}
                                >
                                    <Circle sx={{ height: 8, width: 8 }} />
                                    <Typography>GST Simplified</Typography>
                                </Stack>
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
                                <Button
                                    variant="contained"
                                    onClick={() => navigate("/pricing")}
                                >
                                    Pricing
                                </Button>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid size={{ md: 6 }}>
                        <Stack
                            sx={{
                                height: "100%",
                                justifyContent: "center",
                                position: "relative",
                            }}
                        >
                            <img
                                src={Card}
                                alt="dashboard"
                                style={{
                                    position: "absolute",
                                    right: 140,
                                    transform:
                                        "translate(0, 73px)rotate(41.17deg)",
                                }}
                            />
                            <img
                                src={CardBack}
                                alt="dashboard"
                                style={{
                                    position: "absolute",
                                    zIndex: "-1",
                                    top: "6%",
                                    right: "9%",
                                    transform:
                                        "translate(0, 50px) rotate(-102.53deg)",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    backgroundColor: "white",
                                    height: 58,
                                    width: 58,
                                    boxShadow:
                                        "0 0 40px 5px rgba(132, 132, 132, .2)",
                                    display: "flex",
                                    justifyContent: "center",
                                    padding: 10,
                                    borderRadius: 10,
                                    top: 70,
                                    left: 100,
                                }}
                            >
                                <img
                                    src={Paypal}
                                    alt="paypal"
                                    style={{ transformStyle: "preserve-3d" }}
                                />
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    backgroundColor: "white",
                                    height: 58,
                                    width: 58,
                                    boxShadow:
                                        "0 0 40px 5px rgba(132, 132, 132, .2)",
                                    display: "flex",
                                    justifyContent: "center",
                                    padding: 10,
                                    borderRadius: "50%",
                                    top: -100,
                                    left: 250,
                                }}
                            >
                                <img
                                    src={MasterCard}
                                    alt="master-card"
                                    style={{ transformStyle: "preserve-3d" }}
                                />
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    backgroundColor: "white",
                                    height: 58,
                                    width: 58,
                                    boxShadow:
                                        "0 0 40px 5px rgba(132, 132, 132, .2)",
                                    display: "flex",
                                    justifyContent: "center",
                                    padding: 10,
                                    borderRadius: "50%",
                                    top: -60,
                                    right: 80,
                                }}
                            >
                                <img
                                    src={Visa}
                                    alt="visa"
                                    style={{ transformStyle: "preserve-3d" }}
                                />
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    backgroundColor: "white",
                                    height: 58,
                                    width: 58,
                                    boxShadow:
                                        "0 0 40px 5px rgba(132, 132, 132, .2)",
                                    display: "flex",
                                    justifyContent: "center",
                                    padding: 10,
                                    borderRadius: 10,
                                    bottom: 150,
                                    right: 0,
                                }}
                            >
                                <img
                                    src={Maestro}
                                    alt="maestro"
                                    style={{ transformStyle: "preserve-3d" }}
                                />
                            </div>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default GSTSimplified;
