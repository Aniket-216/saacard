import { Box, Container, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";

const AppIntegrations = () => {
    const theme = useTheme();
    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    pt: 18.75,
                    pb: 15,
                }}
            >
                <Typography
                    variant="h6"
                    color={theme.palette.common.black}
                    mb={8}
                >
                    Absolutely Supercharge Your Integrating Magic Checkout
                </Typography>
                <Grid container spacing={15}>
                    <Grid size={{ md: 2 }}>React</Grid>
                    <Grid size={{ md: 2 }}>Native</Grid>
                    <Grid size={{ md: 2 }}>Flutter</Grid>
                    <Grid size={{ md: 2 }}>Laravel</Grid>
                    <Grid size={{ md: 2 }}>Flask</Grid>
                    <Grid size={{ md: 2 }}>Java</Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AppIntegrations;
