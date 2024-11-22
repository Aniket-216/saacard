import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import BgColorLayout from "../../../layout/BgColorLayout";

const EnergizingPayments = () => {
    const theme = useTheme();
    return (
        <Box sx={{ my: 10 }}>
            <BgColorLayout
                height="auto"
                bgcolor="#6f00eb"
                styleProps={{
                    py: 10,
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
                        <Button variant="contained">Sign Up</Button>
                    </Stack>
                </Container>
            </BgColorLayout>
        </Box>
    );
};

export default EnergizingPayments;
