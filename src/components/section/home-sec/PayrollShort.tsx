import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import BgColorLayout from "../../layout/BgColorLayout";

const PayrollShort = () => {
    const theme = useTheme();
    return (
        <Box sx={{ my: 10 }}>
            <BgColorLayout
                height="auto"
                bgcolor="#6f00eb"
                styleProps={{
                    py: 10,
                }}
            >
                <Container maxWidth="lg">
                    <Stack
                        textAlign={"center"}
                        alignItems={"center"}
                        spacing={2}
                    >
                        <Typography
                            variant="h3"
                            color={theme.palette.common.white}
                        >
                            Powerhouse Of Payroll With Compliance Automation
                        </Typography>
                        <Button variant="contained">Know More</Button>
                    </Stack>
                </Container>
            </BgColorLayout>
        </Box>
    );
};

export default PayrollShort;
