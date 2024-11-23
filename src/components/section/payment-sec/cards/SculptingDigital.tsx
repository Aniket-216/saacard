import Grid from "@mui/material/Grid2";
import BgColorLayout from "../../../layout/BgColorLayout";
import { Box, Container, Typography } from "@mui/material";
import { CardThree } from "../../../../assets/images";

const SculptingDigital = () => {
    return (
        <BgColorLayout height="auto" styleProps={{ py: 10 }}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid size={{ md: 7 }}>
                        <div>
                            <img src={CardThree} />
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
                                Sculpting a Digital Transaction Revolution with
                                Finesse
                            </Typography>
                            <Typography component={"p"}>
                                In a world awash with complexities, our cards
                                emerge as the catalysts of simplicity. They
                                liberate businesses from the burdens of secure
                                online payments, empowering them to nurture
                                growth unhindered. Within this realm of ease,
                                every payment method harmonizes with your
                                enterprise&apos;s unique requirements, fostering
                                an ecosystem of financial fluidity.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </BgColorLayout>
    );
};

export default SculptingDigital;
