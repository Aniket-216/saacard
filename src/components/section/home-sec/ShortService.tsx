import { shortServiceCard } from "../../../constant/cardOptions";
import InfoLayout from "../../layout/InfoLayout";

const ShortService = () => {
    return (
        <InfoLayout
            heading={"Seize Mastery Over Your Finances like Never Before"}
            subheading={
                "Maximize Financial Optimization And Streamline Processes With Our Infrastructure. Ideal For Platforms And Marketplaces Aiming To Accelerate User Payouts In Their Preferred Currencies."
            }
            CARDOPTION={shortServiceCard}
            gridProps={{
                heading: { md: 12, lg: 6 }, // Custom size for the heading
            }}
        />
    );
};

export default ShortService;
