import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import BgColorLayout from "../../layout/BgColorLayout";
import { HandCard, MultipleCard } from "../../../assets";

const PayrollShort = () => {
    const theme = useTheme();
    return (
        <Box sx={{ my: 10, overflow: "hidden" }}>
            <BgColorLayout
                height="auto"
                bgcolor="#6f00eb"
                styleProps={{
                    py: 10,
                    position: "relative",
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
                <Box
                    sx={{
                        position: "absolute",
                        top: -41,
                        left: -288,
                        bottom: "0%",
                    }}
                >
                    <img src={MultipleCard} alt="multiple-card" />
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        bottom: "-1%",
                        right: "-6%",
                        width: 450,
                    }}
                >
                    <img src={HandCard} alt="hand-card" />
                </Box>
            </BgColorLayout>
        </Box>
    );
};

export default PayrollShort;
