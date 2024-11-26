import { Box, Container } from "@mui/material";
import FeatureLayout from "../../../layout/FeatureLayout";
import { swiftPaymentsOption } from "../../../../constant/featureOptions";
import { Mobile, MonthlyPaymentStatus, SavingGrowth } from "../../../../assets";

const SwiftPayments = () => {
    return (
        <Box sx={{ my: 20 }}>
            <Container maxWidth="xl">
                <FeatureLayout
                    heading="Quickest Route to Swift Payments Via Links"
                    subheading="Utilize Bulk Payment Links to streamline your financial operations and simplify transactions, ensuring smoother and more efficient payment processes"
                    OPTIONS={swiftPaymentsOption}
                    childrenStyleProps={{
                        height: "100%",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src={Mobile}
                        style={{
                            position: "absolute",
                        }}
                    />
                    <img
                        src={SavingGrowth}
                        style={{
                            position: "absolute",
                            top: "5px",
                            left: "100px",
                        }}
                    />
                    <img
                        src={MonthlyPaymentStatus}
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

export default SwiftPayments;
