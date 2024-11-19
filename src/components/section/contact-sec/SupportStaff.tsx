import { Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeatureCard from "../../cards/FeatureCard";

const SupportStaff = () => {
    return (
        <Container maxWidth="lg" sx={{ my: 20 }}>
            <Grid container rowGap={10}>
                <Grid size={12}>
                    <Stack textAlign={"center"}>
                        <Typography variant="h1">Live to Line</Typography>
                        <Typography component={"p"} variant="h6">
                            Rest assured, our committed support staff is
                            available to assist you with any questions you might
                            encounter
                        </Typography>
                    </Stack>
                </Grid>
                <Grid size={{ md: 12, lg: 4 }}>
                    <Grid container>
                        <FeatureCard
                            icon="icon"
                            heading="Collaborate Now"
                            subheading="Simplify communication with efficient email solutions"
                            cardStyleProps={{
                                border: "1px solid #6f00eb",
                                borderRadius: "30px",
                                width: "346px",
                                height: "276px",
                            }}
                            cardContentStyleProps={{
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "center",
                                gap: 3,
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid size={{ md: 12, lg: 4 }}>
                    <FeatureCard
                        icon="icon"
                        heading="Track us down"
                        subheading="Navigate seamlessly with our pinpoint-accurate location services."
                        cardStyleProps={{
                            border: "1px solid #6f00eb",
                            borderRadius: "30px",
                            width: "346px",
                            height: "276px",
                        }}
                        cardContentStyleProps={{
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "center",
                            gap: 3,
                        }}
                    />
                </Grid>
                <Grid size={{ md: 12, lg: 4 }}>
                    <FeatureCard
                        icon="icon"
                        heading="Let's partner up"
                        subheading="Stay linked through pristine calls and dependable mobile connectivity."
                        cardStyleProps={{
                            border: "1px solid #6f00eb",
                            borderRadius: "30px",
                            width: "346px",
                            height: "276px",
                        }}
                        cardContentStyleProps={{
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "center",
                            gap: 3,
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default SupportStaff;
