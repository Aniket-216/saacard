import { Box } from "@mui/material";
import { shortGstService } from "../../../constant/featureOptions";
import FeatureLayout from "../../layout/FeatureLayout";
import { Mobile, MonthlyPaymentStatus, SavingGrowth } from "../../../assets";

const ShortGstService = () => {
    return (
        <Box
            sx={{
                my: 15,
            }}
        >
            <FeatureLayout
                heading="Your Trustworthy Guide In GST Matters"
                subheading="We're dedicated to making GST management easier, boosting economic growth, and ensuring businesses thrive in the evolving tax landscape"
                OPTIONS={shortGstService}
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
                    src={SavingGrowth}
                    style={{
                        position: "absolute",
                        top: "80px",
                        left: "130px",
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
        </Box>
    );
};

export default ShortGstService;
