import AllYourDesires from "../../components/section/payment-sec/cards/AllYourDesires";
import CardPayment from "../../components/section/payment-sec/cards/CardPayment";
import CreditOfferings from "../../components/section/payment-sec/cards/CreditOfferings";
import DestinyCards from "../../components/section/payment-sec/cards/DestinyCards";
import DigitalTransaction from "../../components/section/payment-sec/cards/SculptingDigital";

const CardsPage = () => {
    return (
        <>
            <DestinyCards />
            <CardPayment />
            <AllYourDesires />
            <CreditOfferings />
            <DigitalTransaction />
        </>
    );
};

export default CardsPage;
