import {
    Box,
    Button,
    CircularProgress,
    Container,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<Partial<typeof formData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email: string) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Real-time validation
        if (name === "email" && value) {
            setErrors((prev) => ({
                ...prev,
                email: validateEmail(value) ? "" : "Invalid email format",
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const newErrors: Partial<typeof formData> = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (formData.email && !validateEmail(formData.email))
            newErrors.email = "Invalid email format";
        if (!formData.subject) newErrors.subject = "Subject is required";
        if (!formData.message) newErrors.message = "Message is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsSubmitting(false);
            return;
        }

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log("Form submitted:", formData);
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
            setErrors({});
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Container maxWidth="lg" sx={{ my: 10 }}>
            <Stack spacing={2} textAlign={"center"} mb={5}>
                <Typography variant="h3">
                    Conversion Begins In Conversations
                </Typography>
                <Typography component={"p"} variant="subtitle1">
                    Embrace a creatively tailored banking experience, where
                    [Website Name] is devoted to your prosperity at its core
                </Typography>
            </Stack>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 5 }}>
                <Stack spacing={4}>
                    <Stack>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={4}>
                                <Grid size={{ md: 12, lg: 6 }}>
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        error={!!errors.name}
                                        helperText={errors.name}
                                        required
                                        aria-label="Name"
                                    />
                                </Grid>
                                <Grid size={{ md: 12, lg: 6 }}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        error={!!errors.email}
                                        helperText={errors.email}
                                        required
                                        aria-label="Email"
                                    />
                                </Grid>
                                <Grid size={{ md: 12, lg: 6 }}>
                                    <TextField
                                        fullWidth
                                        label="Subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        error={!!errors.subject}
                                        helperText={errors.subject}
                                        required
                                        aria-label="Subject"
                                    />
                                </Grid>
                                <Grid size={{ md: 12, lg: 6 }}>
                                    <TextField
                                        fullWidth
                                        label="Phone (optional)"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        aria-label="Phone"
                                    />
                                </Grid>

                                <Grid size={{ lg: 12 }}>
                                    <TextField
                                        fullWidth
                                        label="Message"
                                        name="message"
                                        multiline
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        error={!!errors.message}
                                        helperText={errors.message}
                                        required
                                        aria-label="Message"
                                    />
                                </Grid>
                            </Grid>
                            <Box
                                sx={{
                                    mt: 4,
                                    textAlign: "center",
                                    display: "flex",
                                    justifyContent: "start",
                                }}
                            >
                                <Button
                                    type="submit"
                                    variant="contained"
                                    disabled={isSubmitting}
                                    startIcon={
                                        isSubmitting && (
                                            <CircularProgress size={20} />
                                        )
                                    }
                                >
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Message"}
                                </Button>
                            </Box>
                        </form>
                    </Stack>
                </Stack>
            </Paper>
        </Container>
    );
};

export default ContactForm;
