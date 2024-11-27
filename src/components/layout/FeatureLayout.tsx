import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { OptionProps } from "../../constant/featureOptions";
import { SealCheckBold } from "../../assets";

interface FeatureLayoutProps {
    children: React.ReactNode;
    heading: string;
    subheading: string | string[]; // Accept both single string or array of strings
    OPTIONS?: OptionProps[];
    childrenStyleProps?: object;
    reverse?: boolean;
}

const FeatureLayout = ({
    children,
    heading,
    subheading,
    OPTIONS,
    childrenStyleProps,
    reverse = false,
}: FeatureLayoutProps) => {
    const theme = useTheme();
    return (
        <Container maxWidth={"xl"}>
            <Grid container spacing={7}>
                <Grid size={6} order={reverse ? 2 : 1}>
                    <Stack
                        sx={{ position: "relative", ...childrenStyleProps }}
                        alignItems={"center"}
                    >
                        {children}
                    </Stack>
                </Grid>
                <Grid size={6} order={reverse ? 1 : 2}>
                    <Stack spacing={4}>
                        <Stack spacing={2}>
                            <Typography
                                variant="h3"
                                color={theme.palette.common.black}
                            >
                                {heading}
                            </Typography>
                            {/* Handle single or multiple paragraphs */}
                            {Array.isArray(subheading) ? (
                                <Stack spacing={2}>
                                    {subheading.map((paragraph, index) => (
                                        <Typography key={index} component={"p"}>
                                            {paragraph}
                                        </Typography>
                                    ))}
                                </Stack>
                            ) : (
                                <Typography component={"p"}>
                                    {subheading}
                                </Typography>
                            )}
                        </Stack>
                        <Box>
                            {Array.isArray(OPTIONS) &&
                                OPTIONS.map((option, index) => (
                                    <Stack
                                        key={index}
                                        direction={"row"}
                                        spacing={2}
                                    >
                                        <Box>
                                            <SealCheckBold
                                                height={28}
                                                width={28}
                                                color="#6F00EB"
                                            />
                                        </Box>
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
