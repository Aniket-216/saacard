import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface FeaturePointProps {
    stackStyleProps?: object;
    title: string;
    subtitle: string;
}

const FeaturePoint = ({
    stackStyleProps,
    title,
    subtitle,
}: FeaturePointProps) => {
    return (
        <Stack sx={stackStyleProps} spacing={2}>
            <Typography>icon</Typography>
            <Typography variant="h6">{title}</Typography>
            <Typography component={"p"} variant="body1">
                {subtitle}
            </Typography>
        </Stack>
    );
};

interface FeaturePointOptionProps {
    id: number;
    title: string;
    subtitle: string;
}

const featurePointOption: FeaturePointOptionProps[] = [
    {
        id: 1,
        title: "Instant Beneficiary Additions",
        subtitle:
            "Seamlessly add beneficiaries and make payments without any waiting period, ensuring swift and convenient transactions.",
    },
    {
        id: 2,
        title: "Scheduled Payouts",
        subtitle:
            "Effortlessly schedule payments ahead of time, ensuring punctual and stress-free transactions.",
    },
    {
        id: 3,
        title: "Searchable Transactions",
        subtitle:
            "Easily locate any past transaction within seconds, streamlining record retrieval and analysis.",
    },
    {
        id: 4,
        title: "Auto-Retry Failed Transactions",
        subtitle:
            "Implement intelligent, automated retries and routing for unsuccessful payments, enhancing payment success rates with minimal intervention.",
    },
    {
        id: 5,
        title: "Approvals Workflow",
        subtitle:
            "Maintain control over transaction approvals, ensuring efficient cash flow management and oversight.",
    },
    {
        id: 6,
        title: "User Roles",
        subtitle:
            "Gain comprehensive control and real-time cash flow insights with customizable user roles and summaries.",
    },
];

const PayoutProdigy = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ lg: 12 }}>
                        <Stack
                            sx={{
                                mx: "auto",
                                textAlign: "center",
                            }}
                        >
                            <Typography variant="h3">
                                Payout Prodigy Unveiled with Artistry Source
                            </Typography>
                            <Typography component={"p"} variant="subtitle1">
                                [Website Name] Payouts platform unveils a realm
                                where businesses wield orchestration artistry
                                for operational finesse, making excellence
                                effortless.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ md: 12, lg: 4 }}>
                        {featurePointOption.slice(0, 3).map((option) => (
                            <FeaturePoint
                                key={option.id}
                                title={option.title}
                                subtitle={option.subtitle}
                                stackStyleProps={{
                                    textAlign: "end",
                                }}
                            />
                        ))}
                    </Grid>
                    <Grid size={{ md: 12, lg: 4 }}>Image</Grid>
                    <Grid size={{ md: 12, lg: 4 }}>
                        {featurePointOption.slice(3, 6).map((option) => (
                            <FeaturePoint
                                key={option.id}
                                title={option.title}
                                subtitle={option.subtitle}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default PayoutProdigy;
