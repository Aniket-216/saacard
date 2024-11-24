import { journeyToProsperityCard } from "../../../../constant/cardOptions";
import InfoLayout from "../../../layout/InfoLayout";

const JourneyToProsperity = () => {
    return (
        <InfoLayout
            heading={"Your Journey to Prosperity begins with (Website Name)"}
            subheading={
                "We excel in providing Precision-driven fintech solutions for a world where every transaction matters"
            }
            CARDOPTION={journeyToProsperityCard}
        />
    );
};

export default JourneyToProsperity;
