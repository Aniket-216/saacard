import { useState } from "react";
import {
    Box,
    Typography,
    IconButton,
    Avatar,
    Stack,
    Divider,
    Container,
} from "@mui/material";

const testimonials = [
    {
        text: "(Website name) transformed my business operations. Their efficiency, tailored support, and innovation saved me time and fueled my business growth. I highly recommend (website name) to fellow entrepreneurs.",
        name: "Larry Lawson",
        avatar: "https://via.placeholder.com/40", // Replace with an actual avatar URL
    },
    {
        text: "Managing my finances has never been easier thanks to (website name). Their user-friendly interface, top-notch customer service, and robust security let me focus on my work with confidence.",
        name: "Jane Doe",
        avatar: "https://via.placeholder.com/40", // Replace with an actual avatar URL
    },
    {
        text: "I love how (website name) combines modern tech with personal support. Their user-friendly app and responsive assistance, along with features like UPI Autopay, make my electronic transactions effortless. Truly modern banking.",
        name: "John Smith",
        avatar: "https://via.placeholder.com/40", // Replace with an actual avatar URL
    },
    {
        text: "(Website name) streamlined our startup's financial processes, offering invaluable insights. Their support during our growth phase was priceless. They're not just a bank; they're our growth partner.",
        name: "John Smith",
        avatar: "https://via.placeholder.com/40", // Replace with an actual avatar URL
    },
    {
        text: "I appreciate the simplicity (website name) brings to my daily transactions. Paying bills, managing credit cards, and automating savings are all easy and quick. Their top-notch security gives me peace of mind. A lifelong customer!",
        name: "John Smith",
        avatar: "https://via.placeholder.com/40", // Replace with an actual avatar URL
    },
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
        );
    };

    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "inherit",
                    color: "#fff",
                }}
            >
                <Typography
                    variant="h4"
                    component="p"
                    sx={{
                        textAlign: "center",
                        marginBottom: 2,
                        color: "white",
                    }}
                >
                    {/* <span role="img" aria-label="heart">
                    ❤️
                </span> */}
                    {testimonials[currentIndex].text}
                </Typography>

                <Divider sx={{ width: "100%", my: 5 }} />

                <Stack
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    width={"100%"}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 2,
                        }}
                    >
                        <Avatar
                            src={testimonials[currentIndex].avatar}
                            alt={testimonials[currentIndex].name}
                            sx={{ width: 40, height: 40, marginRight: 1 }}
                        />
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            color="white"
                        >
                            {testimonials[currentIndex].name}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 3,
                        }}
                    >
                        <IconButton
                            onClick={handlePrev}
                            sx={{ color: "#fff", marginRight: 1 }}
                        >
                            &#60;
                        </IconButton>
                        <IconButton
                            onClick={handleNext}
                            sx={{ color: "#fff", marginLeft: 1 }}
                        >
                            &gt;
                        </IconButton>
                    </Box>
                </Stack>
            </Box>
        </Container>
    );
};

export default TestimonialSlider;
