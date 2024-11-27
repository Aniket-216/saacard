import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
    PricingOne,
    PricingThree,
    PricingTwo,
    SealCheckBold,
} from "../../../../assets";

interface TransactionCardProps {
    image: string;
    imgText: string;
    Icon: React.ElementType;
    bulletPoints: string[];
}

const TransactionCard = ({
    image,
    imgText,
    Icon,
    bulletPoints,
}: TransactionCardProps) => {
    return (
        <Paper elevation={3} sx={{ p: 3, borderRadius: 4 }}>
            <Stack spacing={5}>
                <Paper
                    elevation={3}
                    sx={{ borderRadius: 2, overflow: "hidden" }}
                >
                    <Stack
                        sx={{
                            position: "relative",
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img src={image} />
                        <Typography variant="h6" sx={{ position: "absolute" }}>
                            {imgText}
                        </Typography>
                    </Stack>
                </Paper>
                <Stack spacing={2}>
                    {bulletPoints.map((bulletPoint, index) => (
                        <Stack key={index} flexDirection={"row"} columnGap={2}>
                            <Icon height={28} width={28} color="#b77ff5" />
                            <Typography variant="body1">
                                {bulletPoint}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Paper>
    );
};

interface TransactionCardOptionProps {
    id: number;
    image: string;
    imgText: string;
    icon: React.ElementType;
    text: string[];
}

const transactionCardOption: TransactionCardOptionProps[] = [
    {
        id: 1,
        image: PricingOne,
        imgText: "Settlements",
        icon: SealCheckBold,
        text: [
            "Receive online customer payments directly",
            "Choose from bank account, digital wallet, or payment card.",
            "Effortlessly accept payments from your customers.",
            "Simplify the payment process for added convenience.",
        ],
    },
    {
        id: 2,
        image: PricingTwo,
        imgText: "Commercial Payments",
        icon: SealCheckBold,
        text: [
            "Enjoy direct settlements offering speed and simplicity.",
            "Streamline the payment process for efficiency.",
            "Benefit from various advantages in commercial transactions.",
            "Experience a hassle-free payment experience.",
        ],
    },
    {
        id: 3,
        image: PricingThree,
        imgText: "API Integration",
        icon: SealCheckBold,
        text: [
            "Seamlessly integrate our powerful payout API.",
            "Enhance your application or platform's functionality.",
            "Streamline payout processes programmatically.",
            "Optimize your payout operations for improved efficiency.",
        ],
    },
];

const EvolvingTransactions = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ lg: 12 }}>
                        <Stack textAlign={"center"}>
                            <Typography variant="h3">
                                Evolving Transactions into Legendary Moments
                            </Typography>
                            <Typography variant="subtitle1" component="p">
                                Prepare for a financial evolution and redefine
                                your financial landscape with our avant-garde
                                API Banking solutions, catalyzing innovation and
                                progress.
                            </Typography>
                        </Stack>
                    </Grid>
                    {transactionCardOption.map((option) => (
                        <Grid key={option.id} size={{ md: 4 }}>
                            <TransactionCard
                                image={option.image}
                                imgText={option.imgText}
                                Icon={option.icon}
                                bulletPoints={option.text}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default EvolvingTransactions;
