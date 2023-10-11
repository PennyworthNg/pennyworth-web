import { useEffect, useState } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// project imports
import useScriptRef from "../../../../hooks/useScriptRef";
import AnimateButton from "../../../../ui-component/extended/AnimateButton";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ArrowForward } from "@mui/icons-material";
import axios from "../../../../api/axios";
import { setUser } from "../../../../store/usersReducer";
import { notify } from "../../../../utils/toast";
import { ToastContainer } from "react-toastify";

// ============================|| FIREBASE - LOGIN ||============================ //

export default function AuthVerify({ ...others }) {
    const theme = useTheme();

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [pin, setPin] = useState(["", "", "", "", "", ""]);
    const navigate = useNavigate();

    const handleChange = (event, index) => {
        const inputValue = event.target.value;
        if (inputValue.length === 1 && !isNaN(inputValue)) {
            const updatedPin = [...pin];
            updatedPin[index] = event.target.value;

            // Focus on the next input field if not the last one
            if (index < updatedPin.length - 1 && event.target.value !== "") {
                const nextInput = document.getElementById(`pin${index + 1}`);
                if (nextInput) {
                    nextInput.focus();
                }
            }

            setPin(updatedPin);
        }
    };

    const handlePaste = (event, index) => {
        event.preventDefault();
        const clipboardData = event.clipboardData || window.clipboardData;
        const pastedNumber = clipboardData.getData("text");

        const digitArray = pastedNumber.toString().split("").map(Number);

        const updatedPin = [...pin];
        digitArray.forEach((digit, i) => {
            if (i < updatedPin.length) {
                updatedPin[i] = digit;
            }
        });

        setPin(updatedPin);
    };

    const handleBackspace = (event, index) => {
        if (event.key === "Backspace") {
            const updatedPin = [...pin];
            updatedPin[index] = "";
            setPin(updatedPin);

            if (index > 0) {
                const prevInput = document.getElementById(`pin${index - 1}`);
                if (prevInput) {
                    prevInput.focus();
                }
            }
        }
    };

    useEffect(() => {
        // Check if the last index is filled, and submit if it is
        if (pin[pin.length - 1] !== "") {
            handleSubmit();
        }
    }, [pin]);

    const resendToken = () => {
        axios
            .post(
                "/api/auth/resend",
                {
                    email: user?.email,
                },
                {
                    headers: {
                        Accept: "application/json",
                    },
                }
            )
            .then((response) => {
                notify("Token Resent", "message");
            })
            .catch((err) => {
                setIsSubmitting(false);
                if (Array.isArray(err.response.data.error)) {
                    Object.entries(err.response.data.error).forEach(
                        ([field, messages]) => {
                            messages.forEach((message) => {
                                notify(`${message}`, "error");
                            });
                        }
                    );
                } else {
                    notify(err.response.data.error, "error");
                }
            });
    };

    const handleSubmit = () => {
        // You can implement your submission logic here
        setIsSubmitting(true);

        axios
            .post(
                "/api/auth/verify",
                {
                    email: user?.email,
                    token: pin.join(""),
                },
                {
                    headers: {
                        Accept: "application/json",
                    },
                }
            )
            .then((response) => {
                localStorage.setItem("access_token", response.data.token);
                dispatch(
                    setUser({
                        id: response.data.user.id,
                        email: response.data.user.email,
                        token: response.data.token,
                    })
                );
                console.log(response.data.user);
                navigate("/dashboard");
            })
            .catch((err) => {
                setIsSubmitting(false);
                if (Array.isArray(err.response.data.error)) {
                    Object.entries(err.response.data.error).forEach(
                        ([field, messages]) => {
                            messages.forEach((message) => {
                                notify(`${message}`, "error");
                            });
                        }
                    );
                } else {
                    notify(err.response.data.error, "error");
                }
            });
    };
    return (
        <>
            <ToastContainer />
            <Box>
                <Stack direction="row" spacing={1}>
                    {pin.map((_pin, index) => (
                        <FormControl
                            fullWidth
                            sx={{ ...theme.typography.customInput }}
                        >
                            <OutlinedInput
                                id={`pin${index}`}
                                value={pin[index]}
                                type="number"
                                onChange={(e) => handleChange(e, index)}
                                label="Email Address / Username"
                                inputProps={{
                                    maxLength: 1,
                                }}
                                onKeyDown={(e) => handleBackspace(e, index)}
                                onPaste={handlePaste}
                            />
                        </FormControl>
                    ))}
                </Stack>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="end"
                    spacing={1}
                >
                    <Typography
                        variant="subtitle1"
                        color="secondary"
                        onClick={resendToken}
                        sx={{
                            textDecoration: "none",
                            cursor: "pointer",
                        }}
                    >
                        Resend Token
                    </Typography>
                </Stack>

                <Box sx={{ mt: 2 }}>
                    <AnimateButton>
                        <Button
                            endIcon={<ArrowForward />}
                            disableElevation
                            disabled={isSubmitting}
                            onClick={handleSubmit}
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            color="secondary"
                        >
                            Verify
                        </Button>
                    </AnimateButton>
                </Box>
            </Box>
        </>
    );
}
