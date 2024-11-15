import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";

const PayrollShort = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                bgcolor: "#6f00eb",
                height: "437px",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Container maxWidth="lg">
                <Stack textAlign={"center"} alignItems={"center"} spacing={2}>
                    <Typography variant="h3" color={theme.palette.common.white}>
                        Powerhouse Of Payroll With Compliance Automation
                    </Typography>
                    <Button variant="contained">Know More</Button>
                </Stack>
            </Container>
        </Box>
    );
};

export default PayrollShort;
