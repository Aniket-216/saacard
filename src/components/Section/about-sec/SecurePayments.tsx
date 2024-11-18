import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FeatureCard from "../../Cards/FeatureCard";

const SecurePayments = () => {
    return (
        <Container maxWidth="md" sx={{ my: 10 }}>
            <Grid container spacing={4}>
                <Grid size={12}>
                    <Typography variant="h2">
                        Uncover the Secure Payments Gold Standard
                    </Typography>
                    <Typography component={"p"}>
                        Born from a payment innovation passion, [Website Name]
                        ensures seamless, secure transactions, empowering
                        businesses with a focus on security, innovation, and
                        customer satisfaction. We&apos;re your trusted payment
                        solutions partner.
                    </Typography>
                </Grid>
                <Grid size={12}>
                    <Grid container spacing={20}>
                        <Grid size={{ sm: 12, md: 6 }}>
                            <FeatureCard
                                icon="icon"
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
                                icon="icon"
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
