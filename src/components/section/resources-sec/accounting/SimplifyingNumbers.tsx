import { Box, Container } from "@mui/material";
import FeatureLayout from "../../../layout/FeatureLayout";
import { Mobile } from "../../../../assets";

const SimplifyingNumbersOptions = [
    {
        title: "Accounts Receivable",
        caption:
            "With (website name)'s credit control team, you can streamline your AR management. Manage your offshore receivables from order to cash with (website name).",
    },
    {
        title: "Accounts Payable",
        caption:
            "Get AP management at a fraction of the cost with (website name). Using (website name)'s offshore accounts payable management services, you can manage everything.",
    },
];

const SimplifyingNumbers = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="xl">
                <FeatureLayout
                    heading="Simplifying numbers and making growth possible"
                    subheading={
                        "By using our accounting services, you can not only be sure that your company is complying with financial requirements but also add strategic value to it, empowering you to make decisions that will promote expansion and success."
                    }
                    OPTIONS={SimplifyingNumbersOptions}
                    reverse={true}
                >
                    <img src={Mobile} alt="mobile" />
                </FeatureLayout>
            </Container>
        </Box>
    );
};

export default SimplifyingNumbers;
