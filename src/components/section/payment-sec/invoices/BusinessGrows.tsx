import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeatureCard from "../../../cards/FeatureCard";
import {
    DiversePayment,
    EffortlessBilling,
    InstantPaymentBold,
    InvoiceCreation,
    OperationalEfficiency,
    StreamlinedInvoicing,
} from "../../../../assets";

const businessOption = [
    {
        icon: InvoiceCreation,
        title: "Invoice Creation Made Easy",
        subtitle:
            "Utilize our user-friendly online invoicing system to effortlessly deliver invoices directly to your clients' inboxes.",
    },
    {
        icon: StreamlinedInvoicing,
        title: "Streamlined Online Invoicing",
        subtitle:
            "Empower your clients with diverse payment choices, all accessible through (website name).",
    },
    {
        icon: InstantPaymentBold,
        title: "Instant Payment Gratification",
        subtitle:
            "Boost business growth through accelerated cash flow and diminished outstanding receivables.",
    },
    {
        icon: OperationalEfficiency,
        title: "Operational Efficiency Simplified",
        subtitle:
            "Effortlessly monitor outstanding payments, establish automated payment reminders, and streamline recurring invoicing with our intuitive tools.",
    },
    {
        icon: EffortlessBilling,
        title: "Effortless Billing",
        subtitle:
            "Experience seamless billing with our platform, sending invoices effortlessly and tracking payments with precision.",
    },
    {
        icon: DiversePayment,
        title: "Diverse Payment Options",
        subtitle:
            "Offering flexibility by providing a various range of payment methods through our (website name).",
    },
];

const BusinessGrows = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid size={{ lg: 12 }}>
                        <Stack sx={{ width: "50%", mx: "auto" }}>
                            <Typography variant="h3">
                                Where Invoices Thrive and Business Grows Strong
                            </Typography>
                            <Typography component={"p"} variant="subtitle1">
                                Leverage our integrated platform for sending
                                polished invoices, securing instant payments,
                                and streamlining your business operations with
                                ease and efficiency
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ lg: 12 }}>
                        <Grid container>
                            {businessOption.map((option, index) => {
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

export default BusinessGrows;
