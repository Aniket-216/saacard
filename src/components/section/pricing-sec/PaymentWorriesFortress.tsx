import { Box, Container, Stack, Typography } from "@mui/material";
import BgColorLayout from "../../layout/BgColorLayout";

const PaymentWorriesFortress = () => {
    return (
        <Box sx={{ py: 10 }}>
            <BgColorLayout bgcolor="#6f00eb" styleProps={{ height: "300px" }}>
                <Container maxWidth="lg">
                    <Stack spacing={4} alignItems={"center"}>
                        <Typography variant="h4" color="white">
                            Shed Your Payment Worries At Our Fortress
                        </Typography>
                        <Stack flexDirection={"row"} columnGap={4}>
                            <Typography variant="subtitle1" color="white">
                                E-commerce
                            </Typography>
                            <Typography variant="subtitle1" color="white">
                                Digital wallet
                            </Typography>
                            <Typography variant="subtitle1" color="white">
                                Monetization
                            </Typography>
                            <Typography variant="subtitle1" color="white">
                                Payment reconciliation
                            </Typography>
                            <Typography variant="subtitle1" color="white">
                                Portal Pathfinder
                            </Typography>
                            <Typography variant="subtitle1" color="white">
                                Currency Control Hub
                            </Typography>
                        </Stack>
                    </Stack>
                </Container>
            </BgColorLayout>
        </Box>
    );
};

export default PaymentWorriesFortress;
