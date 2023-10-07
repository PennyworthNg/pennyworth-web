import PropTypes from "prop-types";
import { useState } from "react";

// material-ui
import { styled, useTheme } from "@mui/material/styles";
import { Avatar, Box, Grid, Menu, MenuItem, Typography } from "@mui/material";

// project imports
import MainCard from "../../../ui-component/cards/MainCard";
import SkeletonEarningCard from "../../../ui-component/cards/Skeleton/EarningCard";
import AnimateButton from "../../../ui-component/extended/AnimateButton";
import WalletModal from "./WalletModal";

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

// ===========================|| DASHBOARD DEFAULT - NO WALLET CARD ||=========================== //

export const NoWalletCard = ({ isLoading }) => {
    const theme = useTheme();
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            {isLoading ? (
                <SkeletonEarningCard />
            ) : (
                <AnimateButton>
                    <CardWrapper
                        border={false}
                        content={false}
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                            setOpenModal(true);
                        }}
                    >
                        <Box sx={{ p: 2.25 }}>
                            <Grid container direction="column">
                                <Grid item>
                                    <Grid item>
                                        <Typography
                                            align="center"
                                            sx={{
                                                fontSize: "2.125rem",
                                                fontWeight: 500,
                                                mr: 1,
                                                mt: 1.75,
                                                mb: 0.75,
                                            }}
                                        >
                                            No wallet connected
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item sx={{ mb: 1.25 }}>
                                    <Typography
                                        align="center"
                                        sx={{
                                            fontSize: "1rem",
                                            fontWeight: 500,
                                            color: theme.palette.secondary[200],
                                        }}
                                    >
                                        Click to create a wallet or connect an
                                        existing one
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </CardWrapper>
                </AnimateButton>
            )}
            <WalletModal open={openModal} setOpen={setOpenModal} />
        </>
    );
};

NoWalletCard.propTypes = {
    isLoading: PropTypes.bool,
};
