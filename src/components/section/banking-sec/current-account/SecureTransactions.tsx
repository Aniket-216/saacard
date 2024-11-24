import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface TransactionCardProps {
    image: string;
    imgText: string;
    icon: string;
    bulletPoints: string[];
}

const SecureTransactionCard = ({
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

interface SecureTransactionsOptionProps {
    id: number;
    image: string;
    imgText: string;
    icon: string;
    text: string[];
}

const secureTransactionOption: SecureTransactionsOptionProps[] = [
    {
        id: 1,
        image: "image",
        imgText: "CONVENIENT BANKING",
        icon: "icon",
        text: [
            "Seamless Online Access",
            "Mobile Banking App",
            "Contactless Payments",
            "Instant Alert",
        ],
    },
    {
        id: 2,
        image: "image",
        imgText: "LOW FEES, HIGH SAVINGS",
        icon: "icon",
        text: [
            "No Monthly Maintenance Fees",
            "Competitive Interest Rates",
            "Free ATM Access",
            "Budgeting Tools",
        ],
    },
    {
        id: 3,
        image: "image",
        imgText: "ENHANCED SECURITY",
        icon: "icon",
        text: [
            "Multi-Layered Security",
            "Two-Factor Authentication (2FA)",
            "Card Control",
            "Fraud Protection",
        ],
    },
];

const SecureTransactions = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid size={{ lg: 12 }}>
                        <Stack>
                            <Typography variant="h3">
                                Transact with Security, Transcend without Limits
                            </Typography>
                            <Typography variant="subtitle1" component="p">
                                Breaking boundaries in secure, seamless digital
                                transactions. (Website Name), Where innovation
                                meets financial finesse, charting your path to
                                mastery.
                            </Typography>
                        </Stack>
                    </Grid>
                    {secureTransactionOption.map((option) => (
                        <Grid key={option.id} size={{ md: 4 }}>
                            <SecureTransactionCard
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

export default SecureTransactions;
