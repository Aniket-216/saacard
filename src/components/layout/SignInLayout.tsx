import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BgColorLayout from "./BgColorLayout";
import { MobileSeven } from "../../assets";

interface SignInLayoutProps {
    heading: string;
    content: string;
    thankNote: string;
    children: React.ReactNode;
}

const SignInLayout = ({
    heading,
    content,
    thankNote,
    children,
}: SignInLayoutProps) => {
    return (
        <BgColorLayout height="auto" bgImage>
            <Box sx={{ my: 10 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={8}>
                        <Grid size={{ md: 6 }}>
                            <Grid container spacing={4}>
                                <Grid size={{ md: 12 }}>
                                    <Stack spacing={2} color={"white"}>
                                        <Typography
                                            variant="h1"
                                            color="inherit"
                                        >
                                            {heading}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="inherit"
                                        >
                                            {content}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="inherit"
                                        >
                                            {thankNote}
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid size={{ md: 12 }}>{children}</Grid>
                            </Grid>
                        </Grid>
                        <Grid size={{ md: 6 }}>
                            <Stack
                                sx={{
                                    transformStyle: "preserve-3d",
                                    willChange: "transform",
                                    animation:
                                        "diagonalMove 3s infinite ease-in-out", // Animation reference
                                    "@keyframes diagonalMove": {
                                        "0%": {
                                            transform:
                                                "translate3d(17px, -12px, 0px)",
                                        },
                                        "50%": {
                                            transform:
                                                "translate3d(30px, -25px, 0px)", // Move diagonally
                                        },
                                        "100%": {
                                            transform:
                                                "translate3d(17px, -12px, 0px)", // Return to start
                                        },
                                    },
                                }}
                            >
                                <img src={MobileSeven} alt="mobile-seven" />
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </BgColorLayout>
    );
};

export default SignInLayout;
