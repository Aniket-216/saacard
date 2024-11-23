import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BgColorLayout from "../../../layout/BgColorLayout";
import { BigMobile } from "../../../../assets/images";

interface LeadWealthCardProps {
    id: number;
    title: string;
}

const LeadWealthCard = ({ id, title }: LeadWealthCardProps) => {
    return (
        <Stack
            flexDirection="row"
            color="black"
            sx={{
                background: "white",
                padding: 2,
                borderRadius: 10,
                gap: 2,
            }}
        >
            <Typography variant="h5" color="inherit">
                {`${id}.`}
            </Typography>

            <Typography variant="h5" color="inherit">
                {title}
            </Typography>
        </Stack>
    );
};

const leadWealthOption = [
    { id: 1, title: "Expert Accountants" },
    { id: 2, title: "Financial Insights" },
    { id: 3, title: "Empower Businesses" },
];

const LeadWealth = () => {
    const theme = useTheme();
    return (
        <Box sx={{ my: 10 }}>
            <BgColorLayout bgcolor="#110d34" height="auto">
                <Container maxWidth="xl">
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
                    <Box sx={{ my: 10 }}>
                        <Grid container spacing={5}>
                            <Grid size={{ md: 6 }}>
                                <img src={BigMobile} alt="big-mobile" />
                            </Grid>
                            <Grid size={{ md: 5 }}>
                                <Stack spacing={2}>
                                    <Typography
                                        variant="h3"
                                        color={theme.palette.common.white}
                                    >
                                        Fresh in Payments Lane
                                    </Typography>
                                    <Stack spacing={3}>
                                        <Typography
                                            variant="subtitle1"
                                            color={theme.palette.common.white}
                                        >
                                            Our accounting services are
                                            customized to match your specific
                                            needs, whether you&apos;re a
                                            startup, a developing business, or
                                            an established corporation.
                                        </Typography>
                                        {leadWealthOption.map((option) => (
                                            <LeadWealthCard
                                                key={option.id}
                                                {...option}
                                            />
                                        ))}
                                    </Stack>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </BgColorLayout>
        </Box>
    );
};

export default LeadWealth;
