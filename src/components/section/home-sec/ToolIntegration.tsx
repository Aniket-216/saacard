import Grid from "@mui/material/Grid2";
import BgColorLayout from "../../layout/BgColorLayout";
import { Box, Button, Container, Typography } from "@mui/material";
import { CardThree } from "../../../assets";

const ToolIntegration = () => {
    return (
        <BgColorLayout height="auto" styleProps={{ py: 10 }}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid size={{ md: 7 }}>
                        <div style={{ position: "relative" }}>
                            <div>
                                <img src={CardThree} />
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </Grid>
                    <Grid size={{ md: 5 }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                                textAlign: "end",
                                gap: 2,
                            }}
                        >
                            <Typography variant="h3">
                                Access Everything You Need With One Onboard
                            </Typography>
                            <Typography component={"p"}>
                                Take control of when and how your users receive
                                payments, ensuring secure and swift fund
                                transfers with unwavering dependability
                            </Typography>
                            <Button variant="contained">Read More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </BgColorLayout>
    );
};

export default ToolIntegration;
