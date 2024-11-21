import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BgColorLayout from "../../../layout/BgColorLayout";
import { CardThree } from "../../../../assets/images";

const DigitalPayments = () => {
    return (
        <BgColorLayout height="710px">
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
                                Charting New Waters in Digital Payments
                            </Typography>
                            <Typography component={"p"}>
                                Navigate the online payment universe
                                effortlessly on any device, extending your
                                business flourish with our all-encompassing
                                payment solution.
                            </Typography>
                            <Button variant="contained">Read More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </BgColorLayout>
    );
};

export default DigitalPayments;
