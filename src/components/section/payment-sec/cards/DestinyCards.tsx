import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Dashboard } from "../../../../assets/images";

const DestinyCards = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid size={{ md: 6 }}>
                        <Stack>
                            <Stack flexDirection={"row"}>
                                <Box>.</Box>
                                <Typography>Destiny Through Cards</Typography>
                            </Stack>
                            <Typography variant="h1">
                                More Banking with Your Card Companion
                            </Typography>
                            <Typography component={"p"} variant="subtitle1">
                                Integrate our payment cards effortlessly into
                                your existing systems and platforms. Our
                                user-friendly APIs make it simple to incorporate
                                card payments into your online business. Making
                                each transaction extension of your business.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ md: 6 }}>
                        <img src={Dashboard} alt="dashboard" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default DestinyCards;
