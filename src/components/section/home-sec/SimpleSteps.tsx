import { Box, Button, Stack, Typography } from "@mui/material";
import ScrollLayout, { StepProps } from "../../layout/ScrollLayout";

const SimpleSteps = () => {
    const steps: StepProps[] = [
        {
            id: 1,
            title: "Get Started",
            description:
                "Kickstart the process by providing your contact information and a few key business details. Your success story begins here.",
            type: "image",
            image: "path/to/image1.png",
        },
        {
            id: 2,
            title: "Effortless KYC Completion",
            description:
                "Smoothly fulfill your KYC obligations with minimal effort. Share basic details and connect your business account effortlessly.",
            type: "content",
            image: "path/to/image2.png",
        },
        {
            id: 3,
            title: "Ignite Accounting Automation",
            description:
                "Maximize the power of automated bookkeeping and financial statements. Watch as your business's financial management takes flight with ease and precision.",
            type: "image",
            image: "path/to/image3.png",
        },
    ];
    return (
        <Stack spacing={4}>
            <Stack spacing={2} textAlign={"center"}>
                <Typography variant="h3">
                    The Fastest Way To Ignore Waitlist
                </Typography>
                <Box>
                    <Button variant="contained">Begin For Payment</Button>
                </Box>
            </Stack>
            <ScrollLayout steps={steps} />
        </Stack>
    );
};

export default SimpleSteps;
