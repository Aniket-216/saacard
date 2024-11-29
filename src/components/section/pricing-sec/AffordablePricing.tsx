import { Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { PaymentPlans } from "../../../constant/paymentOptions";
import PaymentCard from "../../cards/PaymentCard";
import CustomizedSwitch from "../../CustomizedSwitch";
import { useState } from "react";

const AffordablePricing = () => {
    const [isMonthly, setIsMonthly] = useState(true);

    const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsMonthly(event.target.checked);
    };
    return (
        <Container maxWidth="xl" sx={{ my: 10 }}>
            <Stack spacing={2} textAlign={"center"} mb={5}>
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
                <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    spacing={2}
                >
                    <Typography variant="subtitle1">Bill Monthly</Typography>
                    <CustomizedSwitch
                        checked={isMonthly}
                        onChange={handleToggle}
                    />
                    <Typography variant="subtitle1">
                        Bill Annually 20% off
                    </Typography>
                </Stack>
                <Grid container spacing={4}>
                    {PaymentPlans.map((plan, index) => (
                        <Grid key={index} size={{ md: 12, lg: 4 }}>
                            <PaymentCard option={plan} isMonthly={isMonthly} />
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </Container>
    );
};

export default AffordablePricing;
