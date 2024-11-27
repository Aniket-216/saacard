import { Box, Container, Stack, Typography } from "@mui/material";

const VendorPayments = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="lg">
                <Stack spacing={2}>
                    <Typography variant="h3">
                        Reimagine the vendor payments for modern enterprises
                    </Typography>
                    <blockquote>
                        We can streamline the payments for your vendors and help
                        you increase your business efficiency when you use our
                        vendor payment solutions
                    </blockquote>
                </Stack>
            </Container>
        </Box>
    );
};

export default VendorPayments;
