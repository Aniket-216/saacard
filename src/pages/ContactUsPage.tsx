import { Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeatureCard from "../components/Cards/FeatureCard";

const ContactUsPage = () => {
    return (
        <Container>
            <Grid container spacing={4}>
                <Grid size={12}>
                    <Stack textAlign={"center"}>
                        <Typography>Live to Line</Typography>
                        <Typography>
                            Rest assured, our committed support staff is
                            available to assist you with any questions you might
                            encounter
                        </Typography>
                    </Stack>
                </Grid>
                <Grid size={{ md: 12, lg: 4 }}>
                    <FeatureCard
                        icon="icon"
                        heading="Collaborate Now"
                        subheading="Simplify communication with efficient email solutions"
                    />
                </Grid>
                <Grid size={{ md: 12, lg: 4 }}>
                    <FeatureCard
                        icon="icon"
                        heading="Track us down"
                        subheading="Navigate seamlessly with our pinpoint-accurate location services."
                    />
                </Grid>
                <Grid size={{ md: 12, lg: 4 }}>
                    <FeatureCard
                        icon="icon"
                        heading="Let's partner up"
                        subheading="Stay linked through pristine calls and dependable mobile connectivity."
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContactUsPage;
