import { Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { PaymentPlans } from "../../../constant/paymentOptions";
import PaymentCard from "../../cards/PaymentCard";

const AffordablePricing = () => {
    return (
        <Container maxWidth="lg" sx={{ my: 10 }}>
            <Stack spacing={2}>
                <Typography variant="h3">
                    Revitalize Your Transactions With Our Dynamic System Today
                </Typography>
                <Typography component={"p"} variant="subtitle1">
                    Bid farewell to setup and maintenance fees and embrace one
                    of the industry&apos;s most competitive pay-as-you-go
                    payment models when collecting payments.
                </Typography>
            </Stack>
            <Stack spacing={2}>
                <Stack textAlign={"center"}>
                    Bill Monthly Switch Bill Annually 20% off
                </Stack>
                <Grid container spacing={4}>
                    {PaymentPlans.map((plan, index) => (
                        <Grid key={index} size={{ md: 12, lg: 4 }}>
                            <PaymentCard option={plan} />
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </Container>
    );
};

export default AffordablePricing;
