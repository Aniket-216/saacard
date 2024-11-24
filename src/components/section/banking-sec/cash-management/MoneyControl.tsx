import { Container, Stack, Typography, useTheme } from "@mui/material";
import BgColorLayout from "../../../layout/BgColorLayout";

const MoneyControl = () => {
    const theme = useTheme();
    return (
        <BgColorLayout
            height="auto"
            bgImage
            styleProps={{
                paddingTop: "150px",
                paddingBottom: "200px",
            }}
        >
            <Container maxWidth="lg">
                <Stack textAlign={"center"} spacing={2}>
                    <Typography variant="h1" color={theme.palette.common.white}>
                        Let your money control craft your future
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color={theme.palette.common.white}
                    >
                        Connecting customers, suppliers, employees, and revenue
                        departments electronically for financial transactions
                        and information exchange.
                    </Typography>
                </Stack>
            </Container>
        </BgColorLayout>
    );
};

export default MoneyControl;
