import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface TurbochargedCardProps {
    title: string;
    subtitle: string;
}

const TurbochargedCard = ({ title, subtitle }: TurbochargedCardProps) => {
    return (
        <Paper
            sx={{
                border: "1px solid #6f00eb",
                borderRadius: 5,
                padding: 4,
                height: "100%",
            }}
        >
            <Stack spacing={2}>
                <Typography variant="h6" fontWeight={"bold"}>
                    {title}
                </Typography>
                <Typography variant="body1">{subtitle}</Typography>
            </Stack>
        </Paper>
    );
};

interface TurbochargedOptionProps {
    id: number;
    title: string;
    subtitle: string;
}

const turbochargedOption: TurbochargedOptionProps[] = [
    {
        id: 1,
        title: "Streamlined Payroll Processing",
        subtitle:
            "Efficiently manage payroll tasks, from calculation to distribution, simplifying payroll administration and ensuring accurate and timely payments.",
    },
    {
        id: 2,
        title: "Customizable Payment Schedules",
        subtitle:
            "Tailor payment schedules to match your business's needs, allowing flexibility in meeting employee compensation cycles.",
    },
    {
        id: 3,
        title: "Secure Salary Disbursements",
        subtitle:
            "Ensure secure salary transfers and disbursements, protecting sensitive financial data and maintaining employee trust.",
    },
    {
        id: 4,
        title: "Tax Compliance Made Easy",
        subtitle:
            "Simplify tax-related tasks, such as deductions and filings, to ensure compliance with regulatory requirements and reduce administrative burdens.",
    },
    {
        id: 5,
        title: "Employee Self-Service Portal",
        subtitle:
            "Empower employees to access their payroll information, facilitating transparency, and reducing HR inquiries.",
    },
    {
        id: 6,
        title: "Reporting and Analytics",
        subtitle:
            "Access detailed payroll reporting and analytics for insights into labor costs, trends, and compliance, aiding informed decision-making.",
    },
];

const TurbochargedGrowth = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ lg: 12 }}>
                        <Stack spacing={2} textAlign={"center"}>
                            <Typography variant="h3">
                                Turbocharged Growth, and Ironclad Safety with
                                (Website Name)
                            </Typography>
                            <Typography component={"p"} variant="body1">
                                Fuel your business with the power of pioneering
                                payment innovation and rock-solid blockchain
                                security, unleashing unprecedented global trade
                                growth through fortified networks.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ lg: 12 }}>
                        <Grid container spacing={5}>
                            {turbochargedOption.map((option) => (
                                <Grid
                                    key={option.id}
                                    size={{ sm: 12, md: 6, lg: 4 }}
                                >
                                    <TurbochargedCard
                                        title={option.title}
                                        subtitle={option.subtitle}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default TurbochargedGrowth;
