import { Container, Stack, Typography, useTheme } from "@mui/material";
import BgColorLayout from "../components/Layout/BgColorLayout";

const AboutPage = () => {
    const theme = useTheme();
    return (
        <BgColorLayout
            height="569px"
            bgImage
            styleProps={{
                paddingTop: "150px",
                paddingBottom: "200px",
            }}
        >
            <Container maxWidth="xl">
                <Stack textAlign={"center"} spacing={2}>
                    <Typography variant="h1" color={theme.palette.common.white}>
                        Uplifting The Unremarkable To Mainstream Greatness
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color={theme.palette.common.white}
                    >
                        Reviving lackluster enterprises, transforming them into
                        standout successes in the market
                    </Typography>
                </Stack>
            </Container>
        </BgColorLayout>
    );
};

export default AboutPage;
