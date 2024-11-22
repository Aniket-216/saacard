import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Dashboard } from "../../../../assets/images";

const LinkingProsperity = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid size={{ md: 6 }}>
                        <Stack>
                            <Stack flexDirection={"row"}>
                                <Box>.</Box>
                                <Typography>Linking Prosperity</Typography>
                            </Stack>
                            <Typography variant="h1">
                                Unbolting Fast-Track Funds With Our Payment Link
                                Wizardry
                            </Typography>
                            <Typography component={"p"} variant="subtitle1">
                                Experience the enchantment of seamless payments
                                with our magical links. Share them effortlessly
                                through email, SMS, messenger apps, or chatbots,
                                and watch as transactions ignite with speed and
                                ease. Our spellbinding solution transforms the
                                payment process, ensuring swift and convenient
                                financial exchanges. Join us in weaving the
                                future of effortless transactions, one click at
                                a time. Embrace the magic of hassle-free
                                payments today.
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

export default LinkingProsperity;
