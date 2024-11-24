import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import BgColorLayout from "../../../layout/BgColorLayout";

const ReliablePayouts = () => {
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
                            Upholding the Dependability of Reliable Payouts
                        </Typography>
                        <Typography
                            component={"p"}
                            variant="subtitle1"
                            color={theme.palette.common.white}
                        >
                            Step into a realm where financial interactions
                            transcend transactional norms with (website name)
                            Payout Services. Our seamless experiences inspire
                            trust and elevate professional connections, all
                            tailored to your company&apos;s standards.
                        </Typography>
                        <Button variant="contained">Contact Us</Button>
                    </Stack>
                </Container>
            </BgColorLayout>
        </Box>
    );
};

export default ReliablePayouts;
