import { Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeatureCard from "../../cards/FeatureCard";
import { FintechIcon, SecurityRelationshipsIcon } from "../../../assets";

const SecurePayments = () => {
    return (
        <Container maxWidth="md" sx={{ my: 10 }}>
            <Grid container spacing={4}>
                <Grid size={12}>
                    <Stack textAlign="center">
                        <Typography variant="h2">
                            Uncover the Secure Payments Gold Standard
                        </Typography>
                        <Typography component={"p"} variant="body1">
                            Born from a payment innovation passion, [Website
                            Name] ensures seamless, secure transactions,
                            empowering businesses with a focus on security,
                            innovation, and customer satisfaction. We&apos;re
                            your trusted payment solutions partner.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid size={12}>
                    <Grid container spacing={20}>
                        <Grid size={{ sm: 12, md: 6 }}>
                            <FeatureCard
                                Icon={SecurityRelationshipsIcon}
                                heading="Our Dedication to Security and Relationships"
                                subheading="Our commitment is to provide our customers and employees with the utmost in secure payment solutions, fostering enduring connections."
                                cardStyleProps={{
                                    minWidth: "435px",
                                    minHeight: "435px",
                                    backgroundColor: "#faf5ff",
                                    borderRadius: "30px",
                                }}
                                cardContentStyleProps={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 3,
                                }}
                            />
                        </Grid>
                        <Grid size={{ sm: 12, md: 6 }}>
                            <FeatureCard
                                Icon={FintechIcon}
                                heading="Our Path to World-Class Fintech Excellence"
                                subheading="Embracing a customer-centric approach and delivering value to our stakeholders, employees, and customers will propel us to excel as a global fintech leader."
                                cardStyleProps={{
                                    minWidth: "435px",
                                    minHeight: "435px",
                                    backgroundColor: "#faf5ff",
                                    borderRadius: "30px",
                                }}
                                cardContentStyleProps={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 3,
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SecurePayments;
