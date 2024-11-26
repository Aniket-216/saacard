import { Box, Container, Stack, Typography } from "@mui/material";
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

const LinkingProsperity = () => {
    return (
        <Box sx={{ my: 20 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid size={{ md: 6 }}>
                        <Stack spacing={1}>
                            <Stack
                                flexDirection={"row"}
                                columnGap={1}
                                alignItems={"center"}
                                color={"#6f00eb"}
                            >
                                <Circle sx={{ height: 8, width: 8 }} />
                                <Typography variant="body1" color="inherit">
                                    Linking Prosperity
                                </Typography>
                            </Stack>
                            <Typography variant="h1">
                                Unbolting Fast-Track Funds With Our Payment Link
                                Wizardry
                            </Typography>
                            <Typography component={"p"} variant="body1">
                                Experience the enchantment of seamless payments
                                with our magical links. Share them effortlessly
                                through email, SMS, messenger apps, or chatbots,
                                and watch as transactions ignite with speed and
                                ease. Our spellbinding solution transforms the
                                payment process, ensuring swift and convenient
                                financial exchanges. Join us in weaving the
                                future of effortless transactions, one click at
                                a time. Embrace the magic of hassle-free
                                payments today.
                            </Typography>
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

export default LinkingProsperity;
