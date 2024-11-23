import { Box } from "@mui/material";
import { shortGstService } from "../../../constant/featureOptions";
import FeatureLayout from "../../layout/FeatureLayout";
import { Card } from "../../../assets/images";

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
            >
                <img
                    src={Card}
                    style={{
                        rotate: "-90deg",
                        position: "absolute",
                        top: "200px",
                    }}
                    alt="card"
                />
            </FeatureLayout>
        </Box>
    );
};

export default ShortGstService;
