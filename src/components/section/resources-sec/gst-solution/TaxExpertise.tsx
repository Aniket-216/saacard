import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Integration } from "../../../../assets";
import { useNavigate } from "react-router-dom";

const TaxExpertise = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ my: 10 }}>
            <Grid container spacing={4}>
                <Grid size={{ lg: 12 }}>
                    <Stack
                        sx={{ width: "50%", mx: "auto", textAlign: "center" }}
                        spacing={2}
                    >
                        <Typography variant="h3">
                            A Confluence Of Tax Expertise
                        </Typography>
                        <Typography component={"p"} variant="subtitle1">
                            GSTR simplifies intricate tax matters, ensuring
                            seamless compliance for your business success with a
                            full fledge.
                        </Typography>
                        <Box>
                            <Button
                                variant="contained"
                                onClick={() => navigate("/sign-up")}
                            >
                                Sign Up
                            </Button>
                        </Box>
                    </Stack>
                </Grid>
                <Grid size={{ lg: 12 }}>
                    <Container maxWidth="lg">
                        <Stack>
                            <img src={Integration} alt="integration" />
                        </Stack>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TaxExpertise;
