import { Box, Container } from "@mui/material";
import FeatureLayout from "../../../layout/FeatureLayout";
import { Mobile } from "../../../../assets/images";
import { creditOfferingsOption } from "../../../../constant/featureOptions";

const CreditOfferings = () => {
    return (
        <Box sx={{ my: 20 }}>
            <Container maxWidth="xl">
                <FeatureLayout
                    heading="Infuse a dose of joy into your life with our credit offerings"
                    subheading="Experience worldwide acceptance for hassle-free international transactions and cash withdrawals while enjoying rewards, cashback, and enhanced security with our EMV chip-equipped debit & credit cards."
                    OPTIONS={creditOfferingsOption}
                    reverse={true}
                >
                    <img
                        src={Mobile}
                        style={{
                            position: "absolute",
                        }}
                    />
                </FeatureLayout>
            </Container>
        </Box>
    );
};

export default CreditOfferings;
