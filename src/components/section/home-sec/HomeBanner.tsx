import {
    Box,
    Button,
    Container,
    styled,
    Typography,
    useTheme,
} from "@mui/material";
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
} from "../../../assets";
import { useEffect, useState } from "react";

const ParallaxImage = styled("img")(() => ({
    position: "absolute",
    transition: "transform 0.3s ease",
}));

const HomeBanner = () => {
    const theme = useTheme();
    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollOffset(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Calculate the vertical offset for each image based on the scroll position
    const calculateTransform = (baseOffset: number) =>
        `translateY(${baseOffset + scrollOffset * 0.05}px)`;

    return (
        <BgColorLayout height="auto" bgImage>
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

                    <Button
                        variant="outlined"
                        sx={{ border: "1px solid white" }}
                    >
                        Get Started - It&apos;s Free
                    </Button>

                    <div style={{ position: "relative", bottom: "-100px" }}>
                        <img src={Mobile} alt="mobile" />
                        <ParallaxImage
                            src={Cashback}
                            alt="cashback"
                            style={{
                                top: "8%",
                                left: "-32%",
                                borderRadius: "20%",
                                transform: calculateTransform(-10),
                            }}
                        />
                        <ParallaxImage
                            src={AnnualIncrease}
                            alt="annual-increase"
                            style={{
                                top: "20%",
                                left: "80%",
                                borderRadius: "20%",
                                transform: calculateTransform(10),
                            }}
                        />
                        <ParallaxImage
                            src={Card}
                            alt="card"
                            style={{
                                bottom: "34px",
                                left: "-64%",
                                transform: calculateTransform(-15),
                            }}
                        />
                        <ParallaxImage
                            src={Lock}
                            alt="lock"
                            style={{
                                top: "34px",
                                left: "-84%",
                                borderRadius: "100%",
                                height: 50,
                                width: 50,
                                transform: calculateTransform(5),
                            }}
                        />
                        <ParallaxImage
                            src={Dollar}
                            alt="dollar"
                            style={{
                                top: "34px",
                                right: "-104%",
                                borderRadius: "20%",
                                height: 70,
                                width: 70,
                                transform: calculateTransform(-5),
                            }}
                        />
                        <ParallaxImage
                            src={Check}
                            alt="check"
                            style={{
                                top: "180px",
                                left: "-145%",
                                borderRadius: "20%",
                                height: 70,
                                width: 70,
                                transform: calculateTransform(-10),
                            }}
                        />
                        <ParallaxImage
                            src={Percent}
                            alt="percent"
                            style={{
                                top: "300px",
                                right: "-165%",
                                borderRadius: "20%",
                                height: 70,
                                width: 70,
                                transform: calculateTransform(-15),
                            }}
                        />
                    </div>
                </Box>
            </Container>
        </BgColorLayout>
    );
};

export default HomeBanner;
