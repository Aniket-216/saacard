import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface InvoiceCardProps {
    title: string;
    subtitle: string;
}

const invoiceOption: InvoiceCardProps[] = [
    {
        title: "Efficient Invoicing Solutions",
        subtitle:
            "Streamline billing processes, reducing administrative burden.",
    },
    {
        title: "Invoice Tracking and Analytics",
        subtitle:
            "Gain insights into payment trends and optimize financial strategies.",
    },
    {
        title: "Online Payment Integration",
        subtitle:
            "Seamlessly collect payments through integrated digital platforms.",
    },
];

const InvoiceCard = ({ title, subtitle }: InvoiceCardProps) => {
    return (
        <Paper sx={{ maxWidth: 345 }}>
            <img
                style={{ height: 140 }}
                src="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <Stack>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body2">{subtitle}</Typography>
            </Stack>
        </Paper>
    );
};

const InvoicesWork = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="xl">
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
