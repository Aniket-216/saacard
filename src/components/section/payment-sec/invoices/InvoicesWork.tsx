import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Cards, Cashless, CashlessMachine } from "../../../../assets";

interface InvoiceCardProps {
    image: string;
    title: string;
    subtitle: string;
}

const invoiceOption: InvoiceCardProps[] = [
    {
        image: Cards,
        title: "Efficient Invoicing Solutions",
        subtitle:
            "Streamline billing processes, reducing administrative burden.",
    },
    {
        image: Cashless,
        title: "Invoice Tracking and Analytics",
        subtitle:
            "Gain insights into payment trends and optimize financial strategies.",
    },
    {
        image: CashlessMachine,
        title: "Online Payment Integration",
        subtitle:
            "Seamlessly collect payments through integrated digital platforms.",
    },
];

const InvoiceCard = ({ image, title, subtitle }: InvoiceCardProps) => {
    return (
        <Paper
            sx={{
                maxWidth: 345,
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                borderRadius: "16px", // Optional border radius for the card
                boxShadow: 3,
            }}
        >
            <Box
                component="img"
                src={image}
                alt={title}
                sx={{
                    height: 140,
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "12px", // Apply border radius to the image
                    mb: 2,
                }}
            />
            <Stack mt={2} spacing={1}>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body2">{subtitle}</Typography>
            </Stack>
        </Paper>
    );
};

const InvoicesWork = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ lg: 12 }}>
                        <Stack
                            textAlign={"center"}
                            sx={{
                                width: "50%",
                                marginLeft: "auto",
                                marginRight: "auto",
                            }}
                        >
                            <Typography variant="h3">
                                Invoices That Work as Hard as You Do
                            </Typography>
                            <Typography>
                                With meticulous precision, we transform digits
                                into narratives, composing a symphony of
                                financial success with every invoice
                                transaction.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ lg: 12 }}>
                        <Grid container spacing={2}>
                            {invoiceOption.map((option, index) => (
                                <Grid key={index} size={{ md: 4 }}>
                                    <InvoiceCard
                                        image={option.image}
                                        title={option.title}
                                        subtitle={option.subtitle}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default InvoicesWork;
