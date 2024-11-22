import { Box, Container } from "@mui/material";
import FeatureLayout from "../../../layout/FeatureLayout";
import { swiftPaymentsOption } from "../../../../constant/featureOptions";
import { Mobile } from "../../../../assets/images";

const SwiftPayments = () => {
    return (
        <Box sx={{ my: 20 }}>
            <Container maxWidth="xl">
                <FeatureLayout
                    heading="Quickest Route to Swift Payments Via Links"
                    subheading="Utilize Bulk Payment Links to streamline your financial operations and simplify transactions, ensuring smoother and more efficient payment processes"
                    OPTIONS={swiftPaymentsOption}
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

export default SwiftPayments;
