import { Box, Container } from "@mui/material";
import FeatureLayout from "../../../layout/FeatureLayout";
import { Mobile } from "../../../../assets/images";

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
                >
                    <img src={Mobile} alt="mobile" />
                </FeatureLayout>
            </Container>
        </Box>
    );
};

export default QuickerCompensation;
