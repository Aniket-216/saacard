import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { BigMobile } from "../../../assets";
import { motion } from "motion/react";
import BgColorLayout from "../../layout/BgColorLayout";
import { useNavigate } from "react-router-dom";

const FinancialOdyssey = () => {
    const navigate = useNavigate();
    return (
        <BgColorLayout
            height="auto"
            bgcolor="#110d34"
            styleProps={{
                paddingTop: 10,
                paddingBottom: 10,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ md: 7 }}>
                        <Stack
                            height={"100%"}
                            justifyContent={"center"}
                            spacing={4}
                        >
                            <Typography variant="h3" color="white">
                                UnComplicate Your Financial Odyssey with An
                                Adventure
                            </Typography>
                            <Typography component={"p"} color="white">
                                In the symphony of workplace harmony, effortless
                                payroll management takes center stage,
                                orchestrating a melodious blend of workforce
                                efficiency and engagement. And paves the way for
                                a harmonious and productive workplace, where
                                employees feel valued and motivated.
                            </Typography>
                            <Box>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        border: "1px solid white",
                                        ":hover": {
                                            color: "white",
                                        },
                                    }}
                                    onClick={() => navigate("/sign-up")}
                                >
                                    Sign Up
                                </Button>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid size={{ md: 5 }}>
                        <motion.img
                            src={BigMobile}
                            alt="mobile-six"
                            style={{ width: "100%", display: "block" }}
                            initial={{
                                transform: "translateX(100%)",
                                opacity: 0,
                            }} // Starting offscreen
                            animate={{
                                transform: "translateX(0)",
                                opacity: 1,
                            }} // Sliding in
                            transition={{
                                duration: 1, // Duration in seconds
                                easing: "ease-out", // Easing function
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </BgColorLayout>
    );
};

export default FinancialOdyssey;
