import { Box, Container, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BgColorLayout from "../../../layout/BgColorLayout";

const GstCompanies = () => {
    const theme = useTheme();
    return (
        <Box sx={{ my: 10 }}>
            <BgColorLayout bgcolor="#6f00eb" height="auto">
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            py: 10,
                            color: "white",
                        }}
                    >
                        <Typography
                            variant="h6"
                            color={theme.palette.common.white}
                            mb={8}
                        >
                            Mastering Card Payment Preauthorization Beyond
                            Margins
                        </Typography>
                        <Grid
                            container
                            spacing={10}
                            width={"90%"}
                            justifyContent={"space-evenly"}
                        >
                            <Grid size={{ md: 2 }}>Cashless Crusaders</Grid>
                            <Grid size={{ md: 2 }}>Tap To Pay Titans</Grid>
                            <Grid size={{ md: 2 }}>Swipe For Success</Grid>
                            <Grid size={{ md: 2 }}>Card Connoisseurs</Grid>
                            <Grid size={{ md: 2 }}>Dynamic Proficiency</Grid>
                        </Grid>
                    </Box>
                </Container>
            </BgColorLayout>
        </Box>
    );
};

export default GstCompanies;
