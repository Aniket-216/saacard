import { Container, Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { SealCheckBold } from "../../../assets";

const PaymentEaseOptions = [
    { id: 1, label: "Improved Conversion Rates" },
    { id: 2, label: "Effortless Onboarding Process" },
    { id: 3, label: "Mobile Payment Tracking" },
    { id: 4, label: "Single Tap Transactions" },
    { id: 5, label: "In-Depth Payment Analytics" },
    { id: 6, label: "[Website Name] Security Assurance" },
    { id: 7, label: "Simple Code Integration" },
];

const PaymentEase = () => {
    return (
        <Container maxWidth="md" sx={{ my: 10 }}>
            <Grid container spacing={4}>
                <Grid size={12} textAlign={"center"}>
                    <Typography variant="h3">
                        Payment Ease For Your Ever-Growing Business
                    </Typography>
                </Grid>
                <Grid size={{ md: 12, lg: 6 }}>
                    <Stack spacing={5}>
                        <Typography>
                            What sets (Website Name) apart is its intuitive
                            design, guaranteeing a clearest and stress-free user
                            experience. We have harnessed state-of-the-art
                            technology to provide the utmost level of security,
                            ensuring your safety and peace of mind while
                            conducting your financial transactions. Your trust
                            in us drives our continuous pursuit of excellence in
                            the digital world of the financial realm.
                        </Typography>
                        <Typography>
                            Committed to revolutionizing the landscape of
                            digital-age business operations and secure platform
                            that caters to both businesses and individuals,
                            addressing their financial needs with unwavering
                            dedication to innovation and a customer-centric
                            approach.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid size={{ md: 12, lg: 6 }}>
                    {PaymentEaseOptions.map((Option) => (
                        <Stack key={Option.id} spacing={1}>
                            <Stack
                                flexDirection={"row"}
                                alignItems={"center"}
                                columnGap={2}
                            >
                                <SealCheckBold height={20} width={20} />
                                <Typography variant="subtitle1">
                                    {Option.label}
                                </Typography>
                            </Stack>
                            <Divider />
                        </Stack>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
};

export default PaymentEase;
