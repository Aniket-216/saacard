import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { FeatureTools } from "../../constant/featureOptions";

interface FeatureLayoutProps {
    children: React.ReactNode;
    heading: string;
    subheading: string;
    OPTIONS: FeatureTools[];
}

const FeatureLayout = ({
    children,
    heading,
    subheading,
    OPTIONS,
}: FeatureLayoutProps) => {
    const theme = useTheme();
    return (
        <Container maxWidth={"xl"}>
            <Grid container spacing={7}>
                <Grid size={5}>
                    <Stack sx={{ position: "relative" }} alignItems={"center"}>
                        {children}
                    </Stack>
                </Grid>
                <Grid size={7}>
                    <Stack spacing={4}>
                        <Stack spacing={2}>
                            <Typography
                                variant="h3"
                                color={theme.palette.common.black}
                            >
                                {heading}
                            </Typography>
                            <Typography component={"p"}>
                                {subheading}
                            </Typography>
                        </Stack>
                        <Box>
                            {OPTIONS.map((option, index) => (
                                <Stack
                                    key={index}
                                    direction={"row"}
                                    spacing={3}
                                >
                                    <Typography>X</Typography>
                                    <Stack rowGap={1}>
                                        <Typography variant="h6">
                                            {option.title}
                                        </Typography>
                                        <Typography component={"p"} mb={5}>
                                            {option.caption}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            ))}
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};

export default FeatureLayout;
