import {
    Button,
    Checkbox,
    FormControlLabel,
    FormHelperText,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import SignInLayout from "../components/layout/SignInLayout";
import { useState } from "react";
import { Link } from "react-router-dom";

// Type for the form values
interface FormValues {
    email: string;
    password: string;
    termsAccepted: boolean;
}

// Type for the errors
interface FormErrors {
    email: string;
    password: string;
    termsAccepted: string;
}

const SignIn = () => {
    const [formValues, setFormValues] = useState<FormValues>({
        email: "",
        password: "",
        termsAccepted: false,
    });

    const [errors, setErrors] = useState<FormErrors>({
        email: "",
        password: "",
        termsAccepted: "",
    });

    // Handle form field change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked, type } = e.target;
        setFormValues((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // Validate the form
    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            email: "",
            password: "",
            termsAccepted: "",
        };

        // Validate Name

        // Validate Email
        if (!formValues.email) {
            newErrors.email = "Email is required.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            newErrors.email = "Email is invalid.";
            isValid = false;
        }

        // Validate Password
        if (!formValues.password) {
            newErrors.password = "Password is required.";
            isValid = false;
        }

        // Validate Terms checkbox
        if (!formValues.termsAccepted) {
            newErrors.termsAccepted =
                "You must acc<div>SignUp</div>;ept the terms and conditions.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            // If the form is valid, proceed with submission logic (e.g., API call)
            console.log("Form submitted successfully:", formValues);
        }
    };
    return (
        <SignInLayout
            heading="HELLO AGAIN!"
            content="Unlock seamless financial transactions with just a click away,"
            thankNote="Thank you for choosing (Website Name) as your trusted financial partner."
        >
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                        name="email"
                        label="Email"
                        variant="filled"
                        value={formValues.email}
                        onChange={handleInputChange}
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <TextField
                        name="password"
                        label="Password"
                        variant="filled"
                        value={formValues.password}
                        onChange={handleInputChange}
                        error={!!errors.password}
                        helperText={errors.password}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="termsAccepted"
                                checked={formValues.termsAccepted}
                                onChange={handleInputChange}
                                sx={{
                                    color: "white", // Unchecked state color
                                    "&.Mui-checked": {
                                        color: "white", // Checked state color
                                    },
                                }}
                            />
                        }
                        label="I agree to the privacy policy."
                        sx={{
                            color: "white", // Label color
                            "& .MuiTypography-root": {
                                color: "white", // Ensure the label text is white
                            },
                        }}
                    />
                    {errors.termsAccepted && (
                        <FormHelperText error>
                            {errors.termsAccepted}
                        </FormHelperText>
                    )}
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        sx={{
                            ":hover": {
                                color: "white",
                            },
                        }}
                    >
                        Submit
                    </Button>
                    <Stack
                        flexDirection={"row"}
                        gap={1}
                        justifyContent={"space-between"}
                    >
                        <Stack flexDirection={"row"} gap={1}>
                            <Typography variant="body1" color="white">
                                Have an account?
                            </Typography>
                            <Typography
                                component={Link}
                                variant="body1"
                                color="white"
                                to="/sign-up"
                            >
                                Sign Up
                            </Typography>
                        </Stack>
                        <Typography
                            component={Link}
                            variant="body1"
                            to="#"
                            color="white"
                        >
                            Forgot Password
                        </Typography>
                    </Stack>
                </Stack>
            </form>
        </SignInLayout>
    );
};

export default SignIn;
