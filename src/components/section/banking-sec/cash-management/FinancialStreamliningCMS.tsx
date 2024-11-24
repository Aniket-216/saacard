import { Box, Container, Paper, Stack, Typography } from "@mui/material";

const financialStreamingCMSOption = [
    {
        id: 1,
        title: "Financial Operational Streamlining",
        subtitle:
            "Using (website name)'s CMS, a corporation can accelerate receivables, improve payment control, and enable just-in-time funding. By reducing the working capital needed by businesses, the system facilitates faster fund realization.Moreover, it improves financial decision-making by providing insight into paid invoices.",
    },
    {
        id: 2,
        title: "Retailers' CMS",
        subtitle:
            "(Website name)'s CMS allows retailers to accept payments from various billers through its web portal. A credit can be applied to a biller's account instantly when loan EMIs are received from customers. The CMS services offer attractive commissions to retailers, enabling them to extend financial services to those in need of them.",
    },
    {
        id: 3,
        title: "Enhancing Agent Network",
        subtitle:
            "A large amount of cash is available in rural and semi-urban areas, where CMS agents have their cash withdrawal outlets, which is beneficial to the agents' networks as a whole. By providing this additional service, agents are able to earn more money and enable the underserved sections of society to be able to access cash easily.",
    },
    {
        id: 4,
        title: "Cash Management's Importance",
        subtitle:
            "The management of cash flows, deposits, withdrawals, loans, and investments is a critical aspect of banking services. Using CMS software, you can track, forecast, and analyze cash flow data. A bank can improve operational efficiency, reduce costs, and improve accuracy by automating processes and analyzing customer behavior.",
    },
    {
        id: 5,
        title: "Benefits for Businesses",
        subtitle:
            "Financial operations are being improved with cash management solutions. The solutions help businesses manage their finances, understand cash flow dynamics, and make informed investment and fund allocation decisions. Additionally, they help businesses anticipate trends and develop strategies to stay competitive.",
    },
    {
        id: 6,
        title: "Cash Pickup Services by CMS",
        subtitle:
            "(Website name)'s CMS automates cash collection for partners such as Financial Services, and Home Credit. The system makes cash deposits at nearby stores possible, reducing long-distance travel for food aggregators. EMI and cash collection processes are made more efficient by rejecting cash in service providers' bank accounts.",
    },
];

const FinancialStreamliningCMS = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="lg">
                <Paper sx={{ p: 5, bgcolor: "#faf5ff" }} elevation={3}>
                    <Stack spacing={3}>
                        {financialStreamingCMSOption.map((option) => (
                            <Stack key={option.id} spacing={1}>
                                <Typography variant="h5">
                                    {option.title}
                                </Typography>
                                <Typography variant="body1" component={"p"}>
                                    {option.subtitle}
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>
                </Paper>
            </Container>
        </Box>
    );
};

export default FinancialStreamliningCMS;
