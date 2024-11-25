import { Stack, Typography } from "@mui/material";
import ScrollLayout, { StepProps } from "../../layout/ScrollLayout";

const SwiftDelivery = () => {
    const steps: StepProps[] = [
        {
            id: 1,
            title: "Registration and Company Setup",
            description:
                "Start for free and provide essential company details to initiate your account setup effortlessly with (Website Name)..",
            type: "image",
            image: "path/to/image1.png",
        },
        {
            id: 2,
            title: "Efficient Workforce Onboarding",
            description:
                "Easily enter employee information on the dashboard or allow them to self-onboard for convenience.",
            type: "content",
            image: "path/to/image2.png",
        },
        {
            id: 3,
            title: "Initiate Payroll Processing",
            description:
                "After adding employee and compliance data, proceed to run your first payroll smoothly and efficiently.",
            type: "image",
            image: "path/to/image3.png",
        },
    ];
    return (
        <Stack spacing={4}>
            <Stack spacing={2} textAlign={"center"}>
                <Typography variant="h3">
                    Ensure Swift Delivery for All Your Payments
                </Typography>
                <Typography component={"p"} variant="body1">
                    (Website Name) redefines payment innovation, merging
                    technology rigor with unwavering financial security, making
                    payments safe and efficient
                </Typography>
            </Stack>
            <ScrollLayout steps={steps} reverse={true} />
        </Stack>
    );
};
export default SwiftDelivery;
