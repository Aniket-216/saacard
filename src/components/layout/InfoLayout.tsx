import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeatureCard from "../cards/FeatureCard";
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
                <Grid size={{ md: 12, lg: 6 }}>
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
                        size={{ md: 12, lg: index === 2 ? 6 : 3 }}
                        spacing={2}
                    >
                        <FeatureCard
                            icon={card.icon}
                            heading={card.heading}
                            subheading={card.subheading}
                            cardStyleProps={{
                                minWidth: 354,
                                minHeight: 296,
                                boxShadow:
                                    "0 0 40px 5px rgba(132, 132, 132, .2)",
                                borderRadius: "30px",
                                textAlign: "center",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            cardContentStyleProps={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
export default InfoLayout;
