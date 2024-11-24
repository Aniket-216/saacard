import { Box, Container, Stack, Typography } from "@mui/material";

const PaymentSolutionsContent = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="lg">
                <Stack spacing={4}>
                    <Stack spacing={2}>
                        <Typography variant="h5">
                            Transparent Solution
                        </Typography>
                        <Typography variant="subtitle1">
                            Provide seamless payments to your vendors by
                            partnering with us today.
                        </Typography>
                        <Typography variant="subtitle1">
                            Your business relationships will be enhanced by
                            gaining full visibility into your payment
                            transactions, promoting trust and accountability.
                        </Typography>
                    </Stack>
                    <Stack spacing={2}>
                        <Typography variant="h5">
                            Innovative Approach
                        </Typography>
                        <Typography variant="subtitle1">
                            Revolutionize your business by transforming the way
                            you pay to vendors.
                        </Typography>
                        <Typography variant="subtitle1">
                            You can stay ahead of the curve with our innovative
                            payment solutions, designed to meet the evolving
                            needs of businesses in the modern world.
                        </Typography>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default PaymentSolutionsContent;
