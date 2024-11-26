import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import BgColorLayout from "../../../layout/BgColorLayout";
import { useNavigate } from "react-router-dom";
import { HandCard, MultipleCard } from "../../../../assets";

const EnergizingPayments = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    return (
        <Box sx={{ my: 10, overflow: "hidden" }}>
            <BgColorLayout
                height="auto"
                bgcolor="#6f00eb"
                styleProps={{
                    py: 10,
                    position: "relative",
                }}
            >
                <Container maxWidth="lg">
                    <Stack
                        textAlign={"center"}
                        alignItems={"center"}
                        spacing={2}
                    >
                        <Typography
                            variant="h3"
                            color={theme.palette.common.white}
                        >
                            Energizing Payments for Your Digital Ecosystem
                        </Typography>
                        <Typography
                            component={"p"}
                            variant="subtitle1"
                            color={theme.palette.common.white}
                        >
                            Join us to ignite your business with a powerful
                            payments and banking framework, engineered for
                            lasting impact and boundless energy
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={() => navigate("/sign-up")}
                            sx={{
                                ":hover": {
                                    color: "white",
                                },
                            }}
                        >
                            Sign Up
                        </Button>
                    </Stack>
                </Container>
                <Box
                    sx={{
                        position: "absolute",
                        top: -41,
                        left: -288,
                        bottom: "0%",
                    }}
                >
                    <img src={MultipleCard} alt="multiple-card" />
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        bottom: "12%",
                        right: "-8%",
                        width: 450,
                    }}
                >
                    <img src={HandCard} alt="hand-card" />
                </Box>
            </BgColorLayout>
        </Box>
    );
};

export default EnergizingPayments;
