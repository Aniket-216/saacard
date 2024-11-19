import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import BgColorLayout from "../../layout/BgColorLayout";
import {
    AnnualIncrease,
    Card,
    Cashback,
    Check,
    Dollar,
    Lock,
    Mobile,
    Percent,
} from "../../../assets/images";

const HomeBanner = () => {
    const theme = useTheme();
    console.log(theme.palette.primary.main);
    return (
        <>
            <BgColorLayout height="1050px" bgImage>
                <Container
                    sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative",
                    }}
                >
                    <Box
                        component={"div"}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            pt: 10,
                            gap: 3,
                        }}
                    >
                        <Typography
                            variant="h1"
                            color={theme.palette.common.white}
                            sx={{ textAlign: "center" }}
                        >
                            Meticulously Managing Financial Realities
                        </Typography>

                        <Button variant="outlined">
                            Get Started - It&apos;s Free
                        </Button>

                        <div style={{ position: "absolute", bottom: "-100px" }}>
                            <img src={Mobile} alt="mobile" />
                            <img
                                src={Cashback}
                                alt="cashback"
                                style={{
                                    position: "absolute",
                                    top: "8%",
                                    left: "-32%",
                                    borderRadius: "20%",
                                }}
                            />
                            <img
                                src={AnnualIncrease}
                                alt="annual-increase"
                                style={{
                                    position: "absolute",
                                    top: "20%",
                                    left: "80%",
                                    borderRadius: "20%",
                                }}
                            />
                            <img
                                src={Card}
                                alt="card"
                                style={{
                                    position: "absolute",
                                    bottom: "34px",
                                    left: "-64%",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: "34px",
                                    left: "-84%",
                                    backgroundColor: "white",
                                    borderRadius: "100%",
                                    height: 50,
                                    width: 50,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <img src={Lock} alt="lock" />
                            </div>

                            <div
                                style={{
                                    position: "absolute",
                                    top: "34px",
                                    right: "-104%",
                                    backgroundColor: "white",
                                    borderRadius: "20%",
                                    height: 70,
                                    width: 70,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <img src={Dollar} alt="dollar" />
                            </div>

                            <div
                                style={{
                                    position: "absolute",
                                    top: "180px",
                                    left: "-145%",
                                    backgroundColor: "white",
                                    borderRadius: "20%",
                                    height: 70,
                                    width: 70,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <img src={Check} alt="check" />
                            </div>

                            <div
                                style={{
                                    position: "absolute",
                                    top: "300px",
                                    right: "-165%",
                                    backgroundColor: "white",
                                    borderRadius: "20%",
                                    height: 70,
                                    width: 70,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <img src={Percent} alt="percent" />
                            </div>
                        </div>
                    </Box>
                </Container>
            </BgColorLayout>
        </>
    );
};

export default HomeBanner;
