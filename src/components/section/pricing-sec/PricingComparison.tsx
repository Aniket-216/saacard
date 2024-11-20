import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper,
    Container,
    Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const rows = [
    {
        id: 1,
        feature: "Transaction Fee",
        standard: "Yes",
        universal: "No",
        premium: "No",
    },
    {
        id: 2,
        feature: "Free and without document",
        standard: "Yes",
        universal: "Yes",
        premium: "Yes",
    },
    {
        id: 3,
        feature: "Unlimited transaction",
        standard: "No",
        universal: "Yes",
        premium: "Yes",
    },
    {
        id: 4,
        feature: "Accept cash reward",
        standard: "No",
        universal: "Yes",
        premium: "Yes",
    },
    {
        id: 5,
        feature: "Valid only selected country",
        standard: "Yes",
        universal: "Yes",
        premium: "Yes",
    },
    {
        id: 6,
        feature: "Invoice tracking & payment",
        standard: "No",
        universal: "Yes",
        premium: "Yes",
    },
    {
        id: 7,
        feature: "Card current to USD",
        standard: "No",
        universal: "No",
        premium: "Yes",
    },
    {
        id: 8,
        feature: "Bonuses for payment by card",
        standard: "No",
        universal: "No",
        premium: "Yes",
    },
];

const PricingComparison = () => {
    return (
        <Box sx={{ py: 10 }}>
            <Container maxWidth="lg">
                <TableContainer
                    component={Paper}
                    sx={{
                        boxShadow: "none",
                        "& th, td": { border: "none" }, // Removes borders
                    }}
                >
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#faf5ff" }}>
                                <TableCell>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: "#6A0DAD",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Feature
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: "#6A0DAD",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Standard Card
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: "#6A0DAD",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Universal Card
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: "#6A0DAD",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Premium Card
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow
                                    key={row.id}
                                    sx={{
                                        backgroundColor:
                                            index % 2 === 1
                                                ? "#faf5ff"
                                                : "inherit",
                                    }}
                                >
                                    <TableCell
                                        sx={{
                                            fontWeight: "bold",
                                            textAlign: "left",
                                        }}
                                    >
                                        {row.feature}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.standard === "Yes" ? (
                                            <CheckCircleIcon
                                                sx={{ color: "#6A0DAD" }}
                                            />
                                        ) : (
                                            <CancelIcon
                                                sx={{ color: "#FF0000" }}
                                            />
                                        )}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.universal === "Yes" ? (
                                            <CheckCircleIcon
                                                sx={{ color: "#6A0DAD" }}
                                            />
                                        ) : (
                                            <CancelIcon
                                                sx={{ color: "#FF0000" }}
                                            />
                                        )}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.premium === "Yes" ? (
                                            <CheckCircleIcon
                                                sx={{ color: "#6A0DAD" }}
                                            />
                                        ) : (
                                            <CancelIcon
                                                sx={{ color: "#FF0000" }}
                                            />
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    );
};

export default PricingComparison;
