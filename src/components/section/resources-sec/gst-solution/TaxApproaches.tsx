import { Container, Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const taxApproachOptions = [
    { id: 1, label: "Regulatory compliance assurance" },
    { id: 2, label: "Streamlined tax reporting" },
    { id: 3, label: "Seamless payment integration" },
    { id: 4, label: "User-friendly tax solutions" },
    { id: 5, label: "Expert tax consultation" },
    { id: 6, label: "Real-time tax updates" },
    { id: 7, label: "Reliable tax compliance" },
];

const TaxApproaches = () => {
    return (
        <Container maxWidth="md" sx={{ my: 10 }}>
            <Grid container spacing={4}>
                <Grid size={12} textAlign={"center"}>
                    <Typography variant="h3">
                        Smart Tax Approaches Revealed
                    </Typography>
                </Grid>
                <Grid size={{ md: 12, lg: 6 }}>
                    <Stack spacing={5}>
                        <Typography>
                            At [Website Name], we understand the vital role
                            seamless tax management plays in the world of
                            Payment Gateways. Our GST Solutions are designed to
                            enhance your platform&apos;s efficiency. We provide
                            real-time tax calculation, automated invoicing, and
                            comprehensive reporting to ensure compliance and
                            accuracy in all transactions.
                        </Typography>
                        <Typography>
                            Our team of tax experts diligently keeps up-to-date
                            with the ever-evolving tax regulations and ensures
                            your Payment Gateway remains in full compliance.
                            With our comprehensive GST Solutions, you can
                            confidently offer your clients a reliable and
                            user-friendly payment experience, ultimately
                            boosting customer trust, satisfaction, and growth.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid size={{ md: 12, lg: 6 }}>
                    {taxApproachOptions.map((Option) => (
                        <Stack key={Option.id} spacing={2}>
                            <Stack flexDirection={"row"} columnGap={2}>
                                icon
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

export default TaxApproaches;
