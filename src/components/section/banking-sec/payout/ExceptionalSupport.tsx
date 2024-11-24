import { Box, Container, Stack, Typography } from "@mui/material";
import DashedCurvedArrow from "../../../shapes/DashedCurvedArrow";
import BgColorLayout from "../../../layout/BgColorLayout";

interface ExceptionalSupportOptionProp {
    id: number;
    title: string;
    subtitle: string;
}

const exceptionalSupportOption: ExceptionalSupportOptionProp[] = [
    {
        id: 1,
        title: "Create Payout Link",
        subtitle:
            "Initiate the process by generating a unique link, inputting contact details, and specifying the payout amount.",
    },
    {
        id: 2,
        title: "Share and Verify Link",
        subtitle:
            "Share the link with the contact, who opens it and verifies their identity with OTP.",
    },
    {
        id: 3,
        title: "Establish Fund Account",
        subtitle:
            "The contact provides their account details, creating a dedicated Fund account.",
    },
    {
        id: 4,
        title: "Transfer Payout Amount",
        subtitle:
            "Execute the payout by transferring the specified amount to the Fund account, ensuring secure receipt.",
    },
];

const ExceptionalSupportFlow = ({
    id,
    title,
    subtitle,
}: ExceptionalSupportOptionProp) => {
    return (
        <Box sx={{ position: "relative", mb: 4 }}>
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={4}
                // alignItems="center"
                // justifyContent="flex-start"
            >
                {/* Title and Subtitle */}
                <Stack
                    spacing={1}
                    sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}
                >
                    <Typography variant="h5"> {`0${id}.`}</Typography>
                    <Typography variant="h6" fontWeight="bold">
                        {title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        {subtitle}
                    </Typography>
                </Stack>
            </Stack>
            {/* Dashed Arrow */}
            {id < exceptionalSupportOption.length && <DashedCurvedArrow />}
        </Box>
    );
};

const ExceptionalSupport = () => {
    return (
        <Box sx={{ my: 10 }}>
            <BgColorLayout styleProps={{ py: 10 }}>
                <Container maxWidth="lg">
                    <Stack spacing={6}>
                        {/* Header */}
                        <Stack textAlign="center">
                            <Typography variant="h3" fontWeight="bold">
                                Access the portal to exceptional support
                                services
                            </Typography>
                            <Typography variant="subtitle1" component={"p"}>
                                Exhale payment assurance and savor effortless
                                transactions with (Website Name), the epitome of
                                reliable payment excellence
                            </Typography>
                        </Stack>

                        {/* Steps */}
                        <Stack sx={{ mt: 4 }}>
                            {exceptionalSupportOption.map((option) => (
                                <ExceptionalSupportFlow
                                    key={option.id}
                                    {...option}
                                />
                            ))}
                        </Stack>
                    </Stack>
                </Container>
            </BgColorLayout>
        </Box>
    );
};

export default ExceptionalSupport;
