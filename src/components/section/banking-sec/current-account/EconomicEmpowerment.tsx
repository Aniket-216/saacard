import { Box, Container } from "@mui/material";
import FeatureLayout from "../../../layout/FeatureLayout";
import { Mobile, MonthlyPaymentStatus, SavingGrowth } from "../../../../assets";
import { economicEmpowermentOption } from "../../../../constant/featureOptions";

const EconomicEmpowerment = () => {
    return (
        <Box sx={{ my: 20 }}>
            <Container maxWidth="xl">
                <FeatureLayout
                    heading="Crafting Technical Innovations for Economic Empowerment"
                    subheading="Where cutting-edge technology propels your financial future into the next dimension, empowering Financial Intelligence."
                    OPTIONS={economicEmpowermentOption}
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
                        alt="card"
                    />
                    <img
                        src={SavingGrowth}
                        style={{
                            position: "absolute",
                            top: "-50px",
                            left: "100px",
                        }}
                    />
                    <img
                        src={MonthlyPaymentStatus}
                        style={{
                            position: "absolute",
                            bottom: "-20px",
                            right: "50px",
                            height: "250px",
                        }}
                    />
                </FeatureLayout>
            </Container>
        </Box>
    );
};

export default EconomicEmpowerment;
