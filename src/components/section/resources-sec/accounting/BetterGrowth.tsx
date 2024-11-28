import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeatureCard from "../../../cards/FeatureCard";
import {
    AccurateRecordsIcon,
    ExpertSolutionIcon,
    FinancialClarityIcon,
    GrowthPartnershipIcon,
    ObservanceIcon,
    StrategicInsightsIcon,
} from "../../../../assets";

const betterGrowthOption = [
    {
        icon: FinancialClarityIcon,
        title: "Financial Clarity",
        subtitle:
            "A professional accountant can provide you with clear insights into your financial data and help you understand your revenue, expenses, and profitability.",
    },
    {
        icon: ExpertSolutionIcon,
        title: "Expert Solution",
        subtitle:
            "We have a team of certified accountants who are familiar with the complexities of a variety of industries, and we provide the expertise of these experts to our clients.",
    },
    {
        icon: AccurateRecordsIcon,
        title: "Accurate Records",
        subtitle:
            "With our attention to details, you are assured of error-free financial records, which will provide the solid foundation for making business decisions in the future.",
    },
    {
        icon: StrategicInsightsIcon,
        title: "Strategic Insights",
        subtitle:
            "You will be able to gain valuable insights into your financial health, enabling you to make informed strategic decisions based on this information.",
    },
    {
        icon: ObservanceIcon,
        title: "Observance",
        subtitle:
            "Maintain compliance with tax regulations and reporting requirements while focusing your energy on the core activities of your organization.",
    },
    {
        icon: GrowthPartnershipIcon,
        title: "Growth Partnership",
        subtitle:
            "As a partner in your growth, we are not just crunching numbers, rather we act as a support team that offers proactive advice and guidance.",
    },
];

const BetterGrowth = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid size={{ lg: 12 }}>
                        <Stack
                            sx={{
                                width: "50%",
                                mx: "auto",
                                textAlign: "center",
                            }}
                        >
                            <Typography variant="h3">
                                Balancing your books for better growth
                            </Typography>
                            <Typography component={"p"} variant="subtitle1">
                                Discover the impact strategic insights,
                                accuracy, and knowledge can have on your
                                company&apos;s financial trajectory. Together,
                                let&apos;s create your success narrative.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ lg: 12 }}>
                        <Grid container>
                            {betterGrowthOption.map((option, index) => {
                                const isHighlighted = [0, 2, 4].includes(index);
                                const cardStyle = {
                                    backgroundColor: [0, 2, 4].includes(index)
                                        ? "#6f00eb"
                                        : "#fff",
                                    color: [0, 2, 4].includes(index)
                                        ? "#fff"
                                        : "#6f00eb",
                                    borderRadius: {
                                        xs: "30px", // For screens below 'md'
                                        md:
                                            index === 0
                                                ? "30px 30px 0 0" // First card
                                                : index === 2
                                                  ? "30px 30px 0 0" // Fourth card
                                                  : index === 4
                                                    ? "0 0 30px 30px" // Fifth card
                                                    : "0", // Default for other cards
                                    },
                                };

                                return (
                                    <Grid key={index} size={{ sm: 12, md: 4 }}>
                                        <FeatureCard
                                            Icon={option.icon}
                                            heading={option.title}
                                            subheading={option.subtitle}
                                            headVariant="h6"
                                            iconStyleProps={{
                                                color: isHighlighted
                                                    ? "#fff"
                                                    : "#6f00eb",
                                            }}
                                            cardStyleProps={cardStyle}
                                            cardContentStyleProps={{
                                                textAlign: "center",
                                            }}
                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default BetterGrowth;
