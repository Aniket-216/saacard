import { Box, Stack, Typography } from "@mui/material";
import ScrollLayout, { StepProps } from "../../layout/ScrollLayout";
import { BigMobile, FormSubmit, Mobile } from "../../../assets";

const SwiftDelivery = () => {
    const steps: StepProps[] = [
        {
            id: 1,
            title: "Registration and Company Setup",
            description:
                "Start for free and provide essential company details to initiate your account setup effortlessly with (Website Name)..",
            type: "image",
            image: BigMobile,
        },
        {
            id: 2,
            title: "Efficient Workforce Onboarding",
            description:
                "Easily enter employee information on the dashboard or allow them to self-onboard for convenience.",
            type: "content",
            image: FormSubmit,
        },
        {
            id: 3,
            title: "Initiate Payroll Processing",
            description:
                "After adding employee and compliance data, proceed to run your first payroll smoothly and efficiently.",
            type: "image",
            image: Mobile,
        },
    ];
    return (
        <Box sx={{ my: 10 }}>
            <Stack spacing={4}>
                <Stack spacing={2} textAlign={"center"}>
                    <Typography variant="h3">
                        Ensure Swift Delivery for All Your Payments
                    </Typography>
                    <Typography component={"p"} variant="body1">
                        (Website Name) redefines payment innovation, merging
                        technology rigor with unwavering financial security,
                        making payments safe and efficient
                    </Typography>
                </Stack>
                <ScrollLayout steps={steps} reverse={true} />
            </Stack>
        </Box>
    );
};
export default SwiftDelivery;
