import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
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
        <>
            <Grid
                size={{ md: 3 }}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Stack spacing={1}>
                    <Typography variant="h5" color="#6f00eb">
                        {`0${id}.`}
                    </Typography>
                    <Typography variant="h6" fontWeight="bold">
                        {title}
                    </Typography>
                    <Typography variant="body1">{subtitle}</Typography>
                </Stack>
            </Grid>
            <Grid
                size={{ md: 3 }}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            ></Grid>
            <Grid
                size={{ md: 3 }}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            ></Grid>
            <Grid
                size={{ md: 3 }}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            ></Grid>

            <Grid size={{ md: 3 }}>
                <Stack alignItems={"center"}>
                    {id < exceptionalSupportOption.length && (
                        <DashedCurvedArrow />
                    )}
                </Stack>
            </Grid>
        </>
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
                            <Grid container spacing={3}>
                                {exceptionalSupportOption.map((option) => (
                                    <ExceptionalSupportFlow
                                        key={option.id}
                                        {...option}
                                    />
                                ))}
                            </Grid>
                        </Stack>
                    </Stack>
                </Container>
            </BgColorLayout>
        </Box>
    );
};

export default ExceptionalSupport;
