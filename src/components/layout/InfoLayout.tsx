import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeatureCard from "../cards/FeatureCard";
import { ShortServiceCardProps } from "../../constant/cardOptions";

interface InfoLayoutProps {
    heading: string;
    subheading: string;
    CARDOPTION: ShortServiceCardProps[];
    gridProps?: {
        heading?: object; // For the heading section grid
        cards?: object; // For the card grids
    };
}

const InfoLayout = ({
    heading,
    subheading,
    CARDOPTION,
    gridProps,
}: InfoLayoutProps) => {
    return (
        <Container maxWidth="xl" sx={{ my: 15 }}>
            <Grid container spacing={4}>
                <Grid size={{ ...(gridProps?.heading || { md: 12, lg: 6 }) }}>
                    <Stack spacing={3} p={2}>
                        <Typography variant="h3">{heading}</Typography>
                        <Typography variant="body1">{subheading}</Typography>
                        <Box>
                            <Button variant="contained">Know More</Button>
                        </Box>
                    </Stack>
                </Grid>

                {CARDOPTION.map((card, index) => (
                    <Grid
                        key={index}
                        size={{
                            ...(gridProps?.cards || {
                                md: 12,
                                lg: index === 2 ? 6 : 3,
                            }),
                        }}
                        spacing={2}
                    >
                        <FeatureCard
                            Icon={card.icon}
                            heading={card.heading}
                            subheading={card.subheading}
                            headVariant="h6"
                            subHeadingVariant="body1"
                            cardStyleProps={{
                                boxShadow:
                                    "0 0 40px 5px rgba(132, 132, 132, .2)",
                                borderRadius: "30px",
                            }}
                            cardContentStyleProps={{
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
