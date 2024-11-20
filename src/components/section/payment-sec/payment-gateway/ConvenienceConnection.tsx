import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { MobileSix } from "../../../../assets/images";

const ConvenienceConnection = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid size={{ md: 8 }}>
                        <Stack height={"100%"} spacing={4}>
                            <Typography variant="h1">
                                Your Click To Convenience Connection
                            </Typography>
                            <Typography component={"p"}>
                                Bringing you a digital bank that combines
                                advanced technology with a unique touch,
                                we&apos;re redefining the future of financial
                                services experience that&apos;s both modern and
                                heartfelt. a human-centered approach to banking
                                in the digital age with a personal twist.
                            </Typography>
                            <Box>
                                <Button variant="contained" color="primary">
                                    Sign In
                                </Button>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid size={{ md: 4 }}>
                        <img src={MobileSix} alt="mobile-six" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ConvenienceConnection;
