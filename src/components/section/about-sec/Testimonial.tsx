import { Box, Button, Container, Stack, Typography } from "@mui/material";
import FeatureCard from "../../cards/FeatureCard";
import BgColorLayout from "../../layout/BgColorLayout";
import TestimonialSlider from "../../slider/TestimonialSlider";
import {
    AdaptiveAccountFeaturesIcon,
    CustomerRelationIcon,
    FinanceSuiteBold,
} from "../../../assets";

const Testimonial = () => {
    return (
        <BgColorLayout
            height="1581px"
            bgcolor="#110d34"
            styleProps={{
                my: 10,
            }}
        >
            <Container maxWidth="xl">
                <Stack spacing={15}>
                    <Stack spacing={4}>
                        <Stack flexDirection={"row"} columnGap={14}>
                            <FeatureCard
                                Icon={AdaptiveAccountFeaturesIcon}
                                heading="Streamline Your Accounting Processes"
                                subheading="Simplify your financial management and save valuable time and effort with our automated bookkeeping solutions."
                                cardStyleProps={{
                                    minWidth: "413px",
                                    minHeight: "350px",
                                    borderRadius: "30px",
                                    textAlign: "center",
                                    backgroundColor: "#e5e2ff",
                                }}
                                cardContentStyleProps={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 3,
                                    padding: 5,
                                }}
                            />
                            <Stack spacing={4} textAlign={"right"}>
                                <Typography variant="h3" color="white">
                                    Personalized Ledger For Effortless Expense
                                    Tracking And Management
                                </Typography>
                                <Typography component={"p"} color="white">
                                    Paying bills on [Website Name] brings
                                    success, unlocking exclusive offers and
                                    positive experiences. [Website Name]
                                    promotes positivity.
                                </Typography>
                                <Box>
                                    <Button variant="contained">
                                        About Us
                                    </Button>
                                </Box>
                            </Stack>
                        </Stack>
                        <Stack direction={"row"} columnGap={5}>
                            <FeatureCard
                                Icon={FinanceSuiteBold}
                                heading="Gain Control Over Your Finances"
                                subheading="Stay in complete control of your finances by accessing real-time insights into your cash flow, ensuring you make informed decisions."
                                cardStyleProps={{
                                    minWidth: "413px",
                                    minHeight: "350px",
                                    borderRadius: "30px",
                                    textAlign: "center",
                                    backgroundColor: "#e5e2ff",
                                }}
                                cardContentStyleProps={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 3,
                                    padding: 5,
                                }}
                            />
                            <FeatureCard
                                Icon={CustomerRelationIcon}
                                heading="Enhance Customer Relations"
                                subheading="Boost customer satisfaction with our lightning-fast invoicing and efficient payment tracking system, making your interactions smoother and more enjoyable."
                                cardStyleProps={{
                                    minWidth: "413px",
                                    minHeight: "350px",
                                    borderRadius: "30px",
                                    textAlign: "center",
                                    backgroundColor: "#e5e2ff",
                                }}
                                cardContentStyleProps={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 3,
                                    padding: 5,
                                }}
                            />
                        </Stack>
                    </Stack>
                    <Stack>
                        <TestimonialSlider />
                    </Stack>
                </Stack>
            </Container>
        </BgColorLayout>
    );
};

export default Testimonial;
