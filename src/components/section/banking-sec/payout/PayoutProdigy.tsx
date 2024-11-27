import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { MobileSix } from "../../../../assets";
import { BeneficiaryAdditions } from "../../../../assets/svg/BeneficiaryAdditions";
import { ScheduledPayouts } from "../../../../assets/svg/ScheduledPayouts";
import { SearchableTransaction } from "../../../../assets/svg/SearchableTransactions";
import { FailedTransactions } from "../../../../assets/svg/FailedTransactions";
import { Workflow } from "../../../../assets/svg/Workflow";
import { UserRoles } from "../../../../assets/svg/UserRoles";

interface FeaturePointProps {
    stackStyleProps?: object;
    Icon: React.ElementType;
    title: string;
    subtitle: string;
}

const FeaturePoint = ({
    stackStyleProps,
    Icon,
    title,
    subtitle,
}: FeaturePointProps) => {
    return (
        <Stack sx={stackStyleProps} spacing={2}>
            <Box
                sx={{
                    height: 40,
                    width: 40,
                    borderRadius: "50%",
                    border: "1px solid #6f00eb",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Icon height={28} width={28} color="#6f00eb" />
            </Box>
            <Typography variant="h6">{title}</Typography>
            <Typography component={"p"} variant="body1">
                {subtitle}
            </Typography>
        </Stack>
    );
};

interface FeaturePointOptionProps {
    id: number;
    Icon: React.ElementType;
    title: string;
    subtitle: string;
}

const featurePointOption: FeaturePointOptionProps[] = [
    {
        id: 1,
        Icon: BeneficiaryAdditions,
        title: "Instant Beneficiary Additions",
        subtitle:
            "Seamlessly add beneficiaries and make payments without any waiting period, ensuring swift and convenient transactions.",
    },
    {
        id: 2,
        Icon: ScheduledPayouts,
        title: "Scheduled Payouts",
        subtitle:
            "Effortlessly schedule payments ahead of time, ensuring punctual and stress-free transactions.",
    },
    {
        id: 3,
        Icon: SearchableTransaction,
        title: "Searchable Transactions",
        subtitle:
            "Easily locate any past transaction within seconds, streamlining record retrieval and analysis.",
    },
    {
        id: 4,
        Icon: FailedTransactions,
        title: "Auto-Retry Failed Transactions",
        subtitle:
            "Implement intelligent, automated retries and routing for unsuccessful payments, enhancing payment success rates with minimal intervention.",
    },
    {
        id: 5,
        Icon: Workflow,
        title: "Approvals Workflow",
        subtitle:
            "Maintain control over transaction approvals, ensuring efficient cash flow management and oversight.",
    },
    {
        id: 6,
        Icon: UserRoles,
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
                        <Stack spacing={4} sx={{ alignItems: "flex-end" }}>
                            {featurePointOption.slice(0, 3).map((option) => (
                                <FeaturePoint
                                    key={option.id}
                                    Icon={option.Icon}
                                    title={option.title}
                                    subtitle={option.subtitle}
                                    stackStyleProps={{
                                        textAlign: "end",
                                        alignItems: "flex-end",
                                    }}
                                />
                            ))}
                        </Stack>
                    </Grid>
                    <Grid size={{ md: 12, lg: 4 }}>
                        <Stack sx={{ height: "100%" }}>
                            <img src={MobileSix} alt="mobile-six" />
                        </Stack>
                    </Grid>
                    <Grid size={{ md: 12, lg: 4 }}>
                        <Stack spacing={4} sx={{ alignItems: "flex-end" }}>
                            {featurePointOption.slice(3, 6).map((option) => (
                                <FeaturePoint
                                    key={option.id}
                                    Icon={option.Icon}
                                    title={option.title}
                                    subtitle={option.subtitle}
                                />
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default PayoutProdigy;
