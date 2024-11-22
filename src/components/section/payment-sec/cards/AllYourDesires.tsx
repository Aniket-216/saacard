import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const AllYourDesires = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Stack spacing={4}>
                            <Typography variant="h4" sx={{ mb: 2 }}>
                                All Your Desires, Encapsulated in a Single Card
                            </Typography>
                            <Typography
                                component={"p"}
                                variant="subtitle1"
                                sx={{ mb: 2 }}
                            >
                                At [Website Name], we&apos;re thrilled to
                                introduce our innovative debit cards, designed
                                to enhance your banking journey. Our cards offer
                                not just convenience but also an enjoyable
                                financial experience. Embrace the future of
                                payments with our contactless debit cards.
                            </Typography>
                            <Typography
                                component={"p"}
                                variant="subtitle1"
                                sx={{ mb: 2 }}
                            >
                                Experience the joy of seamless banking with
                                [Website Name]&apos;s smarter debit cards.
                                They&apos;re all about convenience and an
                                enjoyable financial journey. Step into the
                                future of payments with our contactless card
                                technology.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Stack spacing={4}>
                            <Typography variant="subtitle1">
                                In the vibrant tapestry of life&apos;s financial
                                canvas, we at [Website Name] have woven a
                                masterpiece. Our credit cards are not mere
                                instruments; they&apos;re the strokes of
                                inspiration that turn dreams into achievements.
                                With every gleaming card, we offer you the keys
                                to a treasury of possibilities to upgrade.
                            </Typography>
                            <Typography variant="subtitle1">
                                Imagine a world where your purchases are more
                                than transactions - they&apos;re tickets to
                                adventure, pathways to rewards, and bridges to
                                the extraordinary. where your aspirations come
                                alive with each swipe. At [Website Name], we
                                invite you to paint your future with colors of
                                empowerment, purpose, and limitless potential.
                                Your journey towards financial independence
                                begins with us.
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AllYourDesires;
