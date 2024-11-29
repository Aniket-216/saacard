import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { HandMobile } from "../../../assets";
import { useNavigate } from "react-router-dom";

const SubscribeNewsletter = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ py: 10 }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        bgcolor: "#110d34",
                        borderRadius: "30px",
                        padding: 5,
                        position: "relative",
                    }}
                >
                    <Stack spacing={4} maxWidth="70%">
                        <Typography variant="h4" color="white">
                            Ascend Your Business Through Our Payment Alchemy
                        </Typography>
                        <Typography variant="subtitle1" color="white">
                            Transcending transactions and forging new fintech
                            frontiers, our APIs unleash the true power of
                            payments for your business
                        </Typography>
                        <Box>
                            <Button
                                variant="outlined"
                                sx={{ bgcolor: "white", color: "#110d34" }}
                                onClick={() => navigate("contact-us")}
                            >
                                Contact us
                            </Button>
                        </Box>
                    </Stack>

                    <img
                        src={HandMobile}
                        alt="hand-mobile"
                        style={{
                            height: "400px",
                            borderBottomRightRadius: "30px",
                            position: "absolute",
                            right: "0%",
                            bottom: "0%",
                            top: "auto",
                            left: "auto",
                        }}
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default SubscribeNewsletter;
