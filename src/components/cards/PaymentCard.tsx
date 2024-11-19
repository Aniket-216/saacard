import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Divider, Stack, Typography } from "@mui/material";
import { PaymentOption } from "../../constant/paymentOptions";

const PaymentCard = ({ option }: { option: PaymentOption }) => {
    return (
        <Card
            sx={{
                minWidth: 275,
                backgroundImage: "linear-gradient(#110d34, #9e54f0)",
            }}
        >
            <CardContent>
                <Stack spacing={2}>
                    <Stack flexDirection={"row"}>
                        <Typography
                            variant="h3"
                            fontWeight={"bold"}
                            color="white"
                        >
                            ₹{option.pricing.monthly}
                        </Typography>
                        <Typography color="white">/month</Typography>
                    </Stack>
                    <Stack>
                        <Typography variant="h6" color="white">
                            {option.name}
                        </Typography>
                    </Stack>
                    <Divider />
                    <Stack>
                        <Typography variant="h6">
                            What&apos;s included?
                        </Typography>
                        {option.features.map((feature, idx) => (
                            <Stack
                                key={idx}
                                flexDirection={"row"}
                                alignItems="center"
                            >
                                <Typography>{feature}</Typography>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

export default PaymentCard;
