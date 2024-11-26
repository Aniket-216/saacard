import { Box, Container } from "@mui/material";
import FeatureLayout from "../../../layout/FeatureLayout";
import { Mobile } from "../../../../assets";

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
                            position: "absolute",
                            top: "200px",
                        }}
                        alt="card"
                    />
                    <img
                        src={""}
                        style={{
                            position: "absolute",
                            top: "80px",
                            left: "130px",
                        }}
                    />
                    <img
                        src={""}
                        style={{
                            position: "absolute",
                            bottom: "70px",
                            right: "80px",
                            height: "250px",
                        }}
                    />
                </FeatureLayout>
            </Container>
        </Box>
    );
};

export default QuickerCompensation;
