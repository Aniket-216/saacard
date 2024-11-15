import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import BgColorLayout from "../../Layout/BgColorLayout";

const HomeBanner = () => {
    const theme = useTheme();
    console.log(theme.palette.primary.main);
    return (
        <>
            <BgColorLayout height="1050px" bgImage>
                <Container
                    sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Box
                        component={"div"}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            pt: 10,
                            gap: 3,
                        }}
                    >
                        <Typography
                            variant="h1"
                            color={theme.palette.common.white}
                            sx={{ textAlign: "center" }}
                        >
                            Meticulously Managing Financial Realities
                        </Typography>

                        <Button variant="outlined">
                            Get Started - It&apos;s Free
                        </Button>
                    </Box>
                </Container>
            </BgColorLayout>
        </>
    );
};

export default HomeBanner;
