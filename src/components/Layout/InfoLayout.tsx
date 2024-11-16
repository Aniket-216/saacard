import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeatureCard from "../Cards/FeatureCard";
import { ShortServiceCardProps } from "../../constant/cardOptions";

interface InfoLayoutProps {
    heading: string;
    subheading: string;
    CARDOPTION: ShortServiceCardProps[];
}

const InfoLayout = ({ heading, subheading, CARDOPTION }: InfoLayoutProps) => {
    return (
        <Container maxWidth="xl" sx={{ my: 15 }}>
            <Grid container spacing={2}>
                <Grid size={{ lg: 12 }}>
                    <Stack>
                        <Typography variant="h3">{heading}</Typography>
                        <Typography variant="caption">{subheading}</Typography>
                        <Box>
                            <Button>Know More</Button>
                        </Box>
                    </Stack>
                </Grid>

                {CARDOPTION.map((card, index) => (
                    <Grid
                        key={index}
                        size={{ md: 6, lg: index === 2 ? 12 : 6 }}
                        spacing={2}
                    >
                        <FeatureCard
                            icon={card.icon}
                            heading={card.heading}
                            subheading={card.subheading}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
export default InfoLayout;
