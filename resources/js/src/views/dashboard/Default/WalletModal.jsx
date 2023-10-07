import Button from "@mui/material/Button";
import { styled, useTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Box, Grid } from "@mui/material";
import MainCard from "../../../ui-component/cards/MainCard";
import { IconWallet } from "@tabler/icons";
import { WalletRounded } from "@mui/icons-material";

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

export default function WalletModal({ open, setOpen }) {
    const theme = useTheme();
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogContent dividers sx={{ p: 5 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={6} sm={12}>
                            <CardWrapper
                                border={false}
                                content={false}
                                sx={{ cursor: "pointer" }}
                            >
                                <Box sx={{ p: 2.25 }}>
                                    <Grid container direction="column">
                                        <Grid item>
                                            <Grid item>
                                                <Typography
                                                    align="center"
                                                    component="div"
                                                    sx={{
                                                        fontSize: "5rem",
                                                        fontWeight: 500,
                                                        mr: 1,
                                                        mt: 1.75,
                                                        mb: 0.75,
                                                    }}
                                                >
                                                    <IconWallet
                                                        sx={{ width: 1000 }}
                                                    />
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item sx={{ mb: 1.25 }}>
                                            <Typography
                                                align="center"
                                                sx={{
                                                    fontSize: "1rem",
                                                    fontWeight: 500,
                                                    color: theme.palette
                                                        .secondary[200],
                                                }}
                                            >
                                                Create Wallet
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </CardWrapper>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} sm={12}>
                            <CardWrapper2
                                border={false}
                                content={false}
                                sx={{ cursor: "pointer" }}
                            >
                                <Box sx={{ p: 2.25 }}>
                                    <Grid container direction="column">
                                        <Grid item>
                                            <Grid item>
                                                <Typography
                                                    align="center"
                                                    component="div"
                                                    sx={{
                                                        fontSize: "2.125rem",
                                                        fontWeight: 500,
                                                        mr: 1,
                                                        mt: 1.75,
                                                        mb: 0.75,
                                                    }}
                                                >
                                                    <WalletRounded
                                                        sx={{ width: 100 }}
                                                    />
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item sx={{ mb: 1.25 }}>
                                            <Typography
                                                align="center"
                                                sx={{
                                                    fontSize: "1rem",
                                                    fontWeight: 500,
                                                    color: theme.palette
                                                        .secondary[200],
                                                }}
                                            >
                                                Import Wallet
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </CardWrapper2>
                        </Grid>
                    </Grid>
                </DialogContent>
            </BootstrapDialog>
        </div>
    );
}
