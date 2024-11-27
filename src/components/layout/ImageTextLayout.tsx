import { Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "motion/react"; // Importing motion library
import { BankOptionProps } from "../../constant/bankingOptions";
import { SealCheckBold } from "../../assets";

interface ImageTextLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
    options: BankOptionProps[];
    reverse?: boolean;
}

const ImageTextLayout = ({
    children,
    title,
    subtitle,
    options,
    reverse = false,
}: ImageTextLayoutProps) => {
    return (
        <Grid container spacing={4}>
            <Grid size={{ sm: 12, md: 6 }} order={reverse ? 2 : 1}>
                <motion.div
                    initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {children}
                </motion.div>
            </Grid>
            <Grid size={{ sm: 12, md: 6 }} order={reverse ? 1 : 2}>
                <Stack spacing={3}>
                    <Stack spacing={2}>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Typography variant="h3">{title}</Typography>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Typography component="p" variant="body1">
                                {subtitle}
                            </Typography>
                        </motion.div>
                    </Stack>
                    <Stack spacing={2}>
                        {options.map((option) => (
                            <motion.div
                                key={option.id}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <Stack spacing={2}>
                                    <Stack columnGap={2} flexDirection="row">
                                        <SealCheckBold
                                            height={24}
                                            width={24}
                                            color="#7F00EB"
                                        />
                                        <Typography>{option.text}</Typography>
                                    </Stack>
                                    <Divider
                                        sx={{
                                            bgcolor: "rgba(111, 0, 235, .1)",
                                        }}
                                    />
                                </Stack>
                            </motion.div>
                        ))}
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default ImageTextLayout;
