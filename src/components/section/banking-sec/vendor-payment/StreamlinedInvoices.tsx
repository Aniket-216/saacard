import { Box, Container, Stack, Typography } from "@mui/material";
import { List, ListItem, ListItemIcon } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

interface BulletPointProps {
    title: string;
    text: string;
}

const BulletPointsWithIcons = ({ title, text }: BulletPointProps) => {
    return (
        <List>
            <ListItem>
                <ListItemIcon>
                    <CircleIcon fontSize="small" />
                </ListItemIcon>
                <Stack>
                    <Typography variant="h6">
                        <strong>{title}</strong>:
                        <span style={{ fontWeight: "normal" }}> {text}</span>
                    </Typography>
                </Stack>
            </ListItem>
        </List>
    );
};

interface PointsProps {
    id: number;
    title: string;
    text: string;
}

const StreamlinedInvoices = () => {
    const points: PointsProps[] = [
        {
            id: 1,
            title: "Source Invoices Hassle-free",
            text: "Managing invoices from vendors and clients has never been easier. With our user-friendly platform, you can streamline your invoicing process.",
        },
        {
            id: 2,
            title: "Auto-Capture Invoice Details",
            text: "Get rid of manual data entry. With our intelligent system, invoice details are automatically captured and organized, saving you time and reducing errors.",
        },
        {
            id: 3,
            title: "Auto-Deduct TDS",
            text: "Keep your taxes compliant effortlessly. You no longer have to worry about manually calculating TDS deductions with our platform.",
        },
        {
            id: 4,
            title: "Make Payments",
            text: "Streamline your payment process with quick, secure, and hassle-free payments. Easily pay vendors and partners, enhancing your business efficiency.",
        },
        {
            id: 5,
            title: "Reconcile",
            text: "Easily reconcile your accounts. You can rest assured that your financial records are always accurate and up-to-date with our advanced tools.",
        },
    ];
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="lg">
                {points.map((point) => (
                    <BulletPointsWithIcons
                        key={point.id}
                        title={point.title}
                        text={point.text}
                    />
                ))}
            </Container>
        </Box>
    );
};

export default StreamlinedInvoices;
