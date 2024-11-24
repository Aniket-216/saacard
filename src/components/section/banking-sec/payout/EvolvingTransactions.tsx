import { Box, Container, Paper, Stack, Typography } from "@mui/material";

import Grid from "@mui/material/Grid2";

interface TransactionCardProps {
    image: string;
    imgText: string;
    icon: string;
    bulletPoints: string[];
}

const TransactionCard = ({
    image,
    imgText,
    icon,
    bulletPoints,
}: TransactionCardProps) => {
    return (
        <Paper elevation={3} sx={{ p: 3 }}>
            <Stack spacing={2}>
                <Paper elevation={3}>
                    <Stack>
                        <img src={image} />
                        <Typography>{imgText}</Typography>
                    </Stack>
                </Paper>

                {bulletPoints.map((bulletPoint, index) => (
                    <Stack key={index} flexDirection={"row"} columnGap={2}>
                        <Typography>{icon}</Typography>
                        <Typography>{bulletPoint}</Typography>
                    </Stack>
                ))}
            </Stack>
        </Paper>
    );
};

interface TransactionCardOptionProps {
    id: number;
    image: string;
    imgText: string;
    icon: string;
    text: string[];
}

const transactionCardOption: TransactionCardOptionProps[] = [
    {
        id: 1,
        image: "image",
        imgText: "Settlements",
        icon: "icon",
        text: [
            "Receive online customer payments directly",
            "Choose from bank account, digital wallet, or payment card.",
            "Effortlessly accept payments from your customers.",
            "Simplify the payment process for added convenience.",
        ],
    },
    {
        id: 2,
        image: "image",
        imgText: "Commercial Payments",
        icon: "icon",
        text: [
            "Enjoy direct settlements offering speed and simplicity.",
            "Streamline the payment process for efficiency.",
            "Benefit from various advantages in commercial transactions.",
            "Experience a hassle-free payment experience.",
        ],
    },
    {
        id: 3,
        image: "image",
        imgText: "API Integration",
        icon: "icon",
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
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid size={{ lg: 12 }}>
                        <Stack>
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
                                icon={option.icon}
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
