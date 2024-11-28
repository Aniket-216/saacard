import { useEffect, useRef, useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Ensure you are importing Grid2 correctly
import { CircleShape } from "../../assets";

export interface StepProps {
    id: number;
    title: string;
    description: string;
    type: "image" | "content";
    image: string;
}

interface ScrollLayoutProps {
    steps: StepProps[];
    reverse?: boolean;
}

const ScrollLayout = ({ steps, reverse = false }: ScrollLayoutProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState<number>(0);
    const [isInView, setIsInView] = useState<boolean>(false);

    const handleScroll = () => {
        if (divRef.current) {
            const rect = divRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top <= windowHeight && rect.bottom >= 0) {
                setIsInView(true);

                // Calculate the scroll progress inside the div
                const divHeight = rect.height;
                const scrollStart =
                    rect.top > 0 ? windowHeight - rect.top : windowHeight;
                const scrolled = Math.min(scrollStart / divHeight, 1) * 100;
                setProgress(scrolled);
            } else {
                setIsInView(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Box
            ref={divRef}
            sx={{
                py: 4,
                backgroundColor: "#f9f9f9",
            }}
        >
            <Container maxWidth="md" sx={{ position: "relative" }}>
                <Box
                    sx={{
                        height: "auto",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    {/* Vertical Progress Bar */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: "50%",
                            width: "4px",
                            backgroundColor: "#e0e0e0",
                            transform: "translateX(-50%)",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: `${progress}%`,
                                backgroundColor: "#6200ea", // Progress bar color
                                transition: "height 1s ease-out", // Smooth transition for the progress bar height
                            }}
                        />
                    </Box>

                    {/* Steps */}
                    <Grid container spacing={10}>
                        {steps.map((step, index) => {
                            const direction = reverse
                                ? index % 2 === 0
                                    ? "row-reverse"
                                    : "row"
                                : index % 2 === 0
                                  ? "row"
                                  : "row-reverse";
                            return (
                                <Grid
                                    key={step.id}
                                    container
                                    direction={direction}
                                    alignItems="center"
                                    spacing={25}
                                    sx={{
                                        position: "relative",
                                        zIndex: 2,
                                        width: "100%",
                                    }}
                                >
                                    {/* Image */}
                                    <Grid size={{ md: 12, lg: 6 }}>
                                        <Box
                                            sx={{
                                                p: 3,
                                                textAlign: "center",
                                            }}
                                        >
                                            <img
                                                src={step.image}
                                                alt={`Step ${step.id}`}
                                                style={{
                                                    width: "100%",
                                                    borderRadius: "8px",
                                                }}
                                            />
                                        </Box>
                                    </Grid>

                                    {/* Content */}
                                    <Grid size={{ md: 12, lg: 6 }}>
                                        <Stack spacing={2}>
                                            <Box
                                                sx={{
                                                    position: "relative",
                                                    width: 50,
                                                    height: 50,
                                                }}
                                            >
                                                <CircleShape
                                                    height={50}
                                                    width={50}
                                                    color="#6f00eb"
                                                />
                                                <Typography
                                                    variant="h5"
                                                    sx={{
                                                        position: "absolute",
                                                        top: "50%",
                                                        left: "50%",
                                                        transform:
                                                            "translate(-50%, -50%)",
                                                        color: "white",
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    {`0${step.id}`}
                                                </Typography>
                                            </Box>

                                            <Typography
                                                variant="h4"
                                                sx={{ fontWeight: "bold" }}
                                            >
                                                {step.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="textSecondary"
                                            >
                                                {step.description}
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default ScrollLayout;
