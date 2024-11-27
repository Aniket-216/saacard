import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { MobileSix } from "../../../../assets";
import { motion } from "motion/react";

const PreciseAccountability = () => {
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
                                Taking precise Accountability for your Accounts
                            </Typography>
                            <Typography component={"p"}>
                                (Website Name) is Your trusted guide to the
                                uncharted territories of digital finance, where
                                your money works tirelessly for you. We aim to
                                create a fintech revolution where payments
                                metamorphose into boundless opportunities for
                                financial transcendence
                            </Typography>
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

export default PreciseAccountability;
