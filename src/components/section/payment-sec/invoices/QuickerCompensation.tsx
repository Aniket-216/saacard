import { Box, Container, Typography } from "@mui/material";
import FeatureLayout from "../../../layout/FeatureLayout";
import { Card, Mobile } from "../../../../assets";

const compensationOptions = [
    {
        title: "Send instantly, monitor from anywhere",
        caption:
            "Easily dispatch digital invoices and estimates, process payments, send reminders, and conveniently track payment statuses, all from anywhere you choose.",
    },
    {
        title: "Accelerate payments with 24/7 accessibility",
        caption:
            "Enable customers to pay invoices online, in person, or via Debit and credit cards, UPI, and Net banking, ensuring swift transactions.",
    },
];

const QuickerCompensation = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="xl">
                <FeatureLayout
                    heading="Designed For Efficiency And Process For Quicker Compensation"
                    subheading={
                        "[Website Name] Invoices, a free, all-in-one invoicing software, empowers businesses to request, track, and manage invoices, estimates, and payments efficiently. It facilitates quicker payments by allowing easy request, acceptance, and recording of payment methods."
                    }
                    OPTIONS={compensationOptions}
                    reverse={true}
                    childrenStyleProps={{
                        height: "100%",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src={Mobile}
                        style={{
                            top: "200px",
                        }}
                        alt="card"
                    />
                    <img
                        src={Card}
                        style={{
                            position: "absolute",
                            bottom: "-20px",
                            right: "50px",
                            height: "250px",
                            zIndex: -1,
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: "-40px",
                            right: "200px",
                            height: "140px",
                            width: "140px",
                            backgroundColor: "#F4F4F4",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <Typography variant="h6">3500</Typography>
                        <Typography variant="body1">Trusted Partner</Typography>
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            bottom: "20px",
                            left: "220px",
                            height: "140px",
                            width: "140px",
                            backgroundColor: "#F4F4F4",
                            borderRadius: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <Typography variant="h6">1M</Typography>
                        <Typography variant="body1">Active User</Typography>
                    </div>
                </FeatureLayout>
            </Container>
        </Box>
    );
};

export default QuickerCompensation;
