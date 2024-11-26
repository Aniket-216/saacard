import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { MobileSix } from "../../../assets";

const FinancialOdyssey = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid size={{ md: 8 }}>
                        <Stack height={"100%"} spacing={4}>
                            <Typography variant="h1">
                                Uncomplicate Your Financial Odyssey with An
                                Adventure
                            </Typography>
                            <Typography component={"p"}>
                                In the symphony of workplace harmony, effortless
                                payroll management takes center stage,
                                orchestrating a melodious blend of workforce
                                efficiency and engagement. And paves the way for
                                a harmonious and productive workplace, where
                                employees feel valued and motivated.
                            </Typography>
                            <Box>
                                <Button variant="contained" color="primary">
                                    Sign Up
                                </Button>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid size={{ md: 4 }}>
                        <img src={MobileSix} alt="mobile-six" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default FinancialOdyssey;
