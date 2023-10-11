import Button from "@mui/material/Button";
import { styled, useTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Box, FormControl, Grid, OutlinedInput, Stack } from "@mui/material";
import MainCard from "../../../ui-component/cards/MainCard";
import AnimateButton from "../../../ui-component/extended/AnimateButton";
import { createWallet } from "../../../api/Wallets";
import { useSelector } from "react-redux";
import { notify } from "../../../utils/toast";
import axios from "../../../api/axios";
import WalletClient from "aptos-wallet-api/src/wallet-client";
import { ArrowForward } from "@mui/icons-material";
import { ToastContainer } from "react-toastify";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark,
    color: "#fff",
    overflow: "hidden",
    position: "relative",
    "&:after": {
        content: '""',
        position: "absolute",
        width: 210,
        height: 210,
        background: theme.palette.secondary[800],
        borderRadius: "50%",
        top: -85,
        right: -95,
        [theme.breakpoints.down("sm")]: {
            top: -105,
            right: -140,
        },
    },
    "&:before": {
        content: '""',
        position: "absolute",
        width: 210,
        height: 210,
        background: theme.palette.secondary[800],
        borderRadius: "50%",
        top: -125,
        right: -15,
        opacity: 0.5,
        [theme.breakpoints.down("sm")]: {
            top: -155,
            right: -70,
        },
    },
}));

const CardWrapper2 = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
    overflow: "hidden",
    position: "relative",
    "&:after": {
        content: '""',
        position: "absolute",
        width: 2100,
        height: 210,
        background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: "50%",
        top: -30,
        right: -180,
    },
    "&:before": {
        content: '""',
        position: "absolute",
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
        borderRadius: "50%",
        top: -160,
        right: -130,
    },
}));

export default function WalletModal({ open, setOpen, setWallets }) {
    const theme = useTheme();
    const handleClose = () => {
        setOpen(false);
        setIsImporting(false);
    };

    const user = useSelector((state) => state.user);
    const [isCreating, setIsCreating] = useState(false);
    const [isImporting, setIsImporting] = useState(false);

    const handleCreateWallet = () => {
        setIsCreating(true);
        const NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
        const FAUCET_URL = "https://faucet.net.aptoslabs.com";
        const walletClient = new WalletClient(NODE_URL, FAUCET_URL);
        walletClient
            .createNewAccount()
            .then((response) => {
                console.log(response.data);
                axios
                    .post(`/api/user/${user?.id}/wallet/create`, {
                        name:
                            "pennywallet" + Math.floor(Math.random() * 90) + 10,
                        address: response.data.accountAddress.hexString,
                        public_key: response.data.signingKey.publicKey,
                        private_key: response.data.signingKey.secretKey,
                        mnemonic: response.data.mnemonic,
                    })
                    .then(async (response) => {
                        setIsCreating(false);
                        handleClose();
                        notify("Wallet Create Successfully", "success");
                        setWallets((prev) => [...prev, response.data.wallet]);
                    })
                    .catch((err) => {
                        notify("Something went wrong", "error");
                        setIsCreating(false);
                    });
            })
            .catch((err) => {
                console.log(err);
                notify(err, "error");
                setIsCreating(false);
            });
    };

    const handleImportWallet = () => {
        setIsImporting(true);
    };
    return (
        <div>
            <ToastContainer />
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                onBackdropClick={handleClose}
            >
                <DialogContent dividers>
                    {!isImporting ? (
                        <Grid container spacing={2} sx={{ p: 3 }}>
                            <Grid item xs={12} md={6} lg={6} sm={12}>
                                <AnimateButton>
                                    <CardWrapper
                                        border={false}
                                        content={false}
                                        sx={{
                                            cursor: "pointer",
                                            height: "250px",
                                            opacity: isCreating ? "0.5" : 1,
                                        }}
                                        onClick={
                                            isCreating
                                                ? null
                                                : handleCreateWallet
                                        }
                                    >
                                        <Box sx={{ p: 2.25 }}>
                                            <Grid
                                                container
                                                justifyContent="center"
                                            >
                                                <Grid item>
                                                    <Typography
                                                        component="div"
                                                        sx={{
                                                            mt: 1.75,
                                                            mb: 0.75,
                                                        }}
                                                    >
                                                        <Box
                                                            component="img"
                                                            src="assets/images/create-wallet.png"
                                                            sx={{
                                                                width: "150px",
                                                            }}
                                                        />
                                                    </Typography>
                                                </Grid>

                                                <Grid item sx={{ mb: 1.25 }}>
                                                    <Typography
                                                        align="center"
                                                        sx={{
                                                            fontSize: "1rem",
                                                            fontWeight: 500,
                                                        }}
                                                    >
                                                        Create Wallet
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </CardWrapper>
                                </AnimateButton>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6} sm={12}>
                                <AnimateButton>
                                    <CardWrapper2
                                        border={false}
                                        content={false}
                                        sx={{
                                            cursor: "pointer",
                                            height: "250px",
                                            opacity: isImporting ? "0.5" : 1,
                                        }}
                                        onClick={
                                            isImporting
                                                ? null
                                                : handleImportWallet
                                        }
                                    >
                                        <Box sx={{ p: 2.25 }}>
                                            <Grid
                                                container
                                                justifyContent="center"
                                            >
                                                <Grid item>
                                                    <Typography
                                                        component="div"
                                                        sx={{
                                                            mt: 1.75,
                                                            mb: 0.75,
                                                        }}
                                                    >
                                                        <Box
                                                            component="img"
                                                            src="assets/images/import-wallet.png"
                                                            sx={{
                                                                width: "200px",
                                                            }}
                                                        />
                                                    </Typography>
                                                </Grid>
                                                <Grid item sx={{ mb: 1.25 }}>
                                                    <Typography
                                                        align="center"
                                                        sx={{
                                                            fontSize: "1rem",
                                                            fontWeight: 500,
                                                        }}
                                                    >
                                                        Import Wallet
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </CardWrapper2>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    ) : (
                        <SeedPhrase
                            setWallets={setWallets}
                            handleClose={handleClose}
                            setIsImporting={setIsImporting}
                        />
                    )}
                </DialogContent>
            </BootstrapDialog>
        </div>
    );
}

function SeedPhrase({ setWallets, handleClose, setIsImporting }) {
    const theme = useTheme();

    const user = useSelector((state) => state.user);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [seed, setSeed] = useState([
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]);

    const handleChange = (event, index) => {
        const inputValue = event.target.value;

        const updatedPin = [...seed];
        updatedPin[index] = event.target.value;

        /*  // Focus on the next input field if not the last one
        if (index < updatedPin.length - 1 && event.target.value !== "") {
            const nextInput = document.getElementById(`seed${index + 1}`);
            if (nextInput) {
                nextInput.focus();
            }
        } */

        setSeed(updatedPin);
    };

    const handleBackspace = (event, index) => {
        if (event.key === "Backspace") {
            const updatedPin = [...seed];
            updatedPin[index] = "";
            setSeed(updatedPin);

            if (index > 0) {
                const prevInput = document.getElementById(`seed${index - 1}`);
                if (prevInput) {
                    prevInput.focus();
                }
            }
        }
    };
    const handleBlur = () => {
        // Check if the last index is filled, and submit if it is
        if (seed[seed.length - 1] !== "") {
            handleSubmit();
        }
    };
    const handlePaste = (event) => {
        event.preventDefault(); // Prevent the default paste behavior

        const clipboardData = event.clipboardData || window.clipboardData;
        const pastedText = clipboardData.getData("text");

        // Split the pasted text by spaces and update the seed array
        const words = pastedText.split(" ");
        const updatedSeed = [...seed];
        words.forEach((word, i) => {
            if (i < updatedSeed.length) {
                updatedSeed[i] = word;
            }
        });

        setSeed(updatedSeed);

        // Check if all fields are filled
        const allFieldsFilled = updatedSeed.every((value) => value !== "");

        if (allFieldsFilled) {
            handleSubmit();
        }
    };
    const handleSubmit = () => {
        setIsSubmitting(true);

        const NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
        const FAUCET_URL = "https://faucet.net.aptoslabs.com";
        const walletClient = new WalletClient(NODE_URL, FAUCET_URL);
        walletClient
            .getAccountFromMnemonic(seed.join(" "))
            .then((response) => {
                console.log(response.data);
                if (response.data === "Invalid Seed Phrase") {
                    notify(response.data, "error");
                    setIsSubmitting(false);
                } else {
                    axios
                        .post(`/api/user/${user?.id}/wallet/create`, {
                            name:
                                "pennywallet" +
                                Math.floor(Math.random() * 90) +
                                10,
                            address: response.data.accountAddress.hexString,
                            public_key: response.data.signingKey.publicKey,
                            private_key: response.data.signingKey.secretKey,
                            mnemonic: response.data.mnemonic,
                        })
                        .then(async (response) => {
                            setIsSubmitting(false);
                            handleClose();
                            notify("Wallet Create Successfully", "success");
                            setWallets((prev) => [
                                ...prev,
                                response.data.wallet,
                            ]);
                        })
                        .catch((err) => {
                            notify("Something went wrong", "error");
                            setIsSubmitting(false);
                        });
                }
            })
            .catch((err) => {
                console.log(err);
                setIsImporting(false);
                handleClose();
                notify(err, "error");
                setIsSubmitting(false);
            });
    };
    return (
        <Box>
            <ToastContainer />
            <Grid container spacing={1}>
                {seed.map((_seed, index) => (
                    <Grid item md={4} lg={4} sm={4} xs={6}>
                        <FormControl
                            fullWidth
                            sx={{ ...theme.typography.customInput }}
                        >
                            <OutlinedInput
                                size="small"
                                id={`seed${index}`}
                                value={seed[index]}
                                onChange={(e) => handleChange(e, index)}
                                label="seed"
                                onKeyDown={(e) => handleBackspace(e, index)}
                                onBlur={handleBlur}
                                onPaste={handlePaste}
                            />
                        </FormControl>
                    </Grid>
                ))}
            </Grid>

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
                        Import
                    </Button>
                </AnimateButton>
            </Box>
        </Box>
    );
}
