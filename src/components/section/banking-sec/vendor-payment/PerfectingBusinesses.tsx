import { Box, Container, Stack, Typography } from "@mui/material";

const PerfectingBusinesses = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="lg">
                <Stack spacing={2}>
                    <Typography variant="h5">Perfecting Businesses!</Typography>
                    <Typography variant="subtitle1" component={"p"}>
                        (website name) is essential to your company&apos;s
                        success to have a solid understanding of the function
                        payments to vendors play. Because of this, we&apos;ve
                        developed a state-of-the-art vendor payment solution
                        that excels in all three areas of effectiveness:
                        security, ease of use, and efficiency. A streamlined
                        payment experience means no more manual hassles.
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default PerfectingBusinesses;
