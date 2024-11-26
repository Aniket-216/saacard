import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { MobileSix } from "../../../../assets";
import { motion } from "motion/react";

const ConvenienceConnection = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid size={{ md: 8 }}>
                        <Stack
                            height={"100%"}
                            spacing={4}
                            justifyContent={"center"}
                        >
                            <Typography variant="h1">
                                Your Click To Convenience Connection
                            </Typography>
                            <Typography component={"p"}>
                                Bringing you a digital bank that combines
                                advanced technology with a unique touch,
                                we&apos;re redefining the future of financial
                                services experience that&apos;s both modern and
                                heartfelt. a human-centered approach to banking
                                in the digital age with a personal twist.
                            </Typography>
                            <Box>
                                <Button variant="contained" color="primary">
                                    Sign In
                                </Button>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid size={{ md: 4 }}>
                        <motion.img
                            src={MobileSix}
                            alt="mobile-six"
                            style={{ width: "100%", display: "block" }}
                            initial={{
                                transform: "translateX(100%)",
                                opacity: 0,
                            }} // Starting offscreen
                            animate={{ transform: "translateX(0)", opacity: 1 }} // Sliding in
                            transition={{
                                duration: 1, // Duration in seconds
                                easing: "ease-out", // Easing function
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ConvenienceConnection;
