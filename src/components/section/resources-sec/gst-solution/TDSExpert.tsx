import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const BulletPointsWithIcons = ({ points }: { points: string[] }) => {
    return (
        <List>
            {points.map((point, index) => (
                <ListItem key={index}>
                    <ListItemIcon>
                        <CircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={point} />
                </ListItem>
            ))}
        </List>
    );
};

const TDSExpert = () => {
    const tdsPoints = [
        "Simplify TDS compliance with expert guidance.",
        "Ensure adherence to regulatory requirements effortlessly.",
        "Focus on core operations while we handle TDS.",
    ];

    const taxCompliancePoints = [
        "Optimize your tax position with comprehensive compliance.",
        "Make sure you comply with tax laws and regulations.",
        "Expert guidance for maintaining tax adherence seamlessly.",
    ];
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="lg">
                <Paper sx={{ bgcolor: "#faf5ff", p: 10, borderRadius: 10 }}>
                    <Stack spacing={4}>
                        <Stack spacing={2}>
                            <Typography variant="h5">TDS Solutions</Typography>
                            <Typography component={"p"} variant="body1">
                                Our TDS solutions are designed to simplify the
                                complex landscape of tax deducted at source. We
                                offer comprehensive services that ensure
                                compliance with all regulatory requirements,
                                making the process hassle-free for your
                                business.
                            </Typography>
                            <BulletPointsWithIcons points={tdsPoints} />
                        </Stack>
                        <Stack spacing={2}>
                            <Typography variant="h5">Tax Compliance</Typography>
                            <Typography component={"p"} variant="body1">
                                Achieving tax compliance is essential for any
                                business. Our tax compliance services cover a
                                wide spectrum of tax-related responsibilities,
                                and we ensure that you will comply with all
                                legal obligations while optimizing your tax
                                position at the same time.
                            </Typography>
                            <BulletPointsWithIcons
                                points={taxCompliancePoints}
                            />
                        </Stack>
                    </Stack>
                </Paper>
            </Container>
        </Box>
    );
};

export default TDSExpert;
