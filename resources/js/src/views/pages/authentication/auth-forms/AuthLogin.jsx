import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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

// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Google from "../../../../assets/images/icons/social-google.svg";
import { useNavigate } from "react-router";
import { ArrowForward } from "@mui/icons-material";

import { setUser } from "../../../../store/usersReducer";
import axios from "../../../../api/axios";
import { notify } from "../../../../utils/toast";
import { ToastContainer } from "react-toastify";

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ ...others }) => {
    const theme = useTheme();
    const [checked, setChecked] = useState(true);

    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        setIsSubmitting(true);
        axios
            .post(
                "/api/auth",
                {
                    email,
                },
                {
                    headers: {
                        Accept: "application/json",
                    },
                }
            )
            .then((response) => {
                dispatch(
                    setUser({
                        id: response.data.user.id,
                        email: response.data.user.email,
                    })
                );
                navigate("/verify-email");
                notify("Welcome... Please verify email.", "success");
            })
            .catch((err) => {
                setIsSubmitting(false);
                Object.entries(err.response.data.error).forEach(
                    ([field, messages]) => {
                        messages.forEach((message) => {
                            notify(`${message}`, "error");
                        });
                    }
                );
            });
    };

    return (
        <>
            <ToastContainer />
            <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-email-login">
                    Email Address
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-email-login"
                    type="email"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email Address"
                    inputProps={{}}
                />
            </FormControl>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={1}
            >
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={(event) =>
                                setChecked(event.target.checked)
                            }
                            name="checked"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Typography
                    variant="subtitle1"
                    color="secondary"
                    sx={{
                        textDecoration: "none",
                        cursor: "pointer",
                    }}
                >
                    Forgot Email?
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
                        Continue
                    </Button>
                </AnimateButton>
            </Box>
        </>
    );
};

export default FirebaseLogin;
