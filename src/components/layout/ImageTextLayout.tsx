import { Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { BankOptionProps } from "../../constant/bankingOptions";

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
        <Grid container spacing={2}>
            <Grid size={{ sm: 12, md: 6 }} order={reverse ? 2 : 1}>
                {children}
            </Grid>
            <Grid size={{ sm: 12, md: 6 }} order={reverse ? 1 : 2}>
                <Stack spacing={3}>
                    <Stack spacing={2}>
                        <Typography variant="h1">{title}</Typography>
                        <Typography component={"p"} variant="subtitle1">
                            {subtitle}
                        </Typography>
                    </Stack>
                    <Stack spacing={2}>
                        {options.map((option) => (
                            <Stack key={option.id} spacing={2}>
                                <Typography>{option.text}</Typography>
                                <Divider
                                    sx={{ bgcolor: "rgba(111, 0, 235, .1)" }}
                                />
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default ImageTextLayout;
