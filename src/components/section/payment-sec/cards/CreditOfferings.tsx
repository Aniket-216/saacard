import { Box, Container, Typography } from "@mui/material";
import FeatureLayout from "../../../layout/FeatureLayout";
import { Card, Mobile } from "../../../../assets";
import { creditOfferingsOption } from "../../../../constant/featureOptions";

const CreditOfferings = () => {
    return (
        <Box sx={{ my: 20 }}>
            <Container maxWidth="lg">
                <FeatureLayout
                    heading="Infuse a dose of joy into your life with our credit offerings"
                    subheading="Experience worldwide acceptance for hassle-free international transactions and cash withdrawals while enjoying rewards, cashback, and enhanced security with our EMV chip-equipped debit & credit cards."
                    OPTIONS={creditOfferingsOption}
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
                            right: "-100px",
                            height: "250px",
                            zIndex: -1,
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: "-40px",
                            right: "60px",
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
                            bottom: "0px",
                            left: "60px",
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

export default CreditOfferings;
