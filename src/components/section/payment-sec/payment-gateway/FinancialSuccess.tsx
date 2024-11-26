import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeatureCard from "../../../cards/FeatureCard";
import {
    Access,
    Api,
    BankBold,
    BudgetTool,
    FinanceSuiteBold,
    PortfolioTracking,
    SecurityBold,
} from "../../../../assets";
import { CustomerSupport } from "../../../../assets/svg/CustomerSupport";

const features = [
    {
        icon: (
            <Access
                style={{ color: "#6f00eb", width: "40px", height: "40px" }}
            />
        ),
        title: "Affordable Access",
    },
    {
        icon: (
            <CustomerSupport
                style={{ color: "#6f00eb", width: "40px", height: "40px" }}
            />
        ),
        title: "24/7 Customer Support",
    },
    {
        icon: (
            <BudgetTool
                style={{ color: "#6f00eb", width: "40px", height: "40px" }}
            />
        ),
        title: "Budgeting Tools",
    },
    {
        icon: (
            <BankBold
                style={{ color: "#6f00eb", width: "40px", height: "40px" }}
            />
        ),
        title: "Comprehensive Banking",
    },
    {
        icon: (
            <SecurityBold
                style={{ color: "#6f00eb", width: "40px", height: "40px" }}
            />
        ),
        title: "Enhanced Security",
    },
    {
        icon: (
            <PortfolioTracking
                style={{ color: "#6f00eb", width: "40px", height: "40px" }}
            />
        ),
        title: "Portfolio Tracking",
    },
    {
        icon: (
            <FinanceSuiteBold
                style={{ color: "#6f00eb", width: "40px", height: "40px" }}
            />
        ),
        title: "Financial Suite",
    },
    {
        icon: (
            <Api style={{ color: "#6f00eb", width: "40px", height: "40px" }} />
        ),
        title: "API Integration",
    },
];

const FinancialSuccess = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid size={{ md: 6 }}>
                        <Typography variant="h3">
                            Propelling Your Business Into Cosmic Financial
                            Success
                        </Typography>
                    </Grid>
                    <Grid size={{ md: 6 }}>
                        <Typography component={"p"} variant="subtitle1">
                            Launching your business into a financial galaxy
                            beyond the stars. With payment solutions as
                            boundless as the new dimension, we expertly guide
                            your voyage toward prosperity&apos;s endless
                            horizon.
                        </Typography>
                    </Grid>
                    <Grid size={{ md: 12 }}>
                        <Grid container spacing={4}>
                            {features.map((feature, index) => (
                                <Grid key={index} size={{ md: 3 }}>
                                    <FeatureCard
                                        icon={feature.icon}
                                        heading={feature.title}
                                        headVariant="h6"
                                        cardStyleProps={{
                                            backgroundColor: "#e5e2ff",
                                            borderRadius: "30px",
                                            padding: "30px",
                                        }}
                                        cardContentStyleProps={{
                                            textAlign: "center",
                                            padding: 0,
                                        }}
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

export default FinancialSuccess;
