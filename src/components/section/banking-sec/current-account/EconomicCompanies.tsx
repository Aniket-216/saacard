import { Box, Container, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BgColorLayout from "../../../layout/BgColorLayout";

const EconomicCompanies = () => {
    const theme = useTheme();
    return (
        <BgColorLayout bgcolor="#6f00eb" height="auto">
            <Container maxWidth="md">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        pt: 18.75,
                        pb: 15,
                        color: "white",
                    }}
                >
                    <Typography
                        variant="h6"
                        color={theme.palette.common.white}
                        mb={8}
                    >
                        Absolutely Supercharge Your Integrating Magic Checkout
                    </Typography>
                    <Grid container spacing={15}>
                        <Grid size={{ md: 2 }}>Holistic</Grid>
                        <Grid size={{ md: 2 }}>Responsive</Grid>
                        <Grid size={{ md: 2 }}>Versatile</Grid>
                        <Grid size={{ md: 2 }}>Interlinked</Grid>
                        <Grid size={{ md: 2 }}>Agile</Grid>
                        <Grid size={{ md: 2 }}>Unified</Grid>
                    </Grid>
                </Box>
            </Container>
        </BgColorLayout>
    );
};

export default EconomicCompanies;
