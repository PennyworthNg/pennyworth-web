// material-ui
import {
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Skeleton,
    Stack,
    Tooltip,
    Typography,
    useMediaQuery,
} from "@mui/material";

// project imports
import MainCard from "../../../ui-component/cards/MainCard";
import { ArrowBackIosNew, WalletOutlined } from "@mui/icons-material";
import axios from "../../../api/axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import WalletModal from "../../dashboard/Default/WalletModal";
import { useNavigate, useParams } from "react-router";

// ==============================|| SAMPLE PAGE ||============================== //

export const Wallet = () => {
    const user = useSelector((state) => state.user);
    const [wallet, setWallet] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`/api/user/${user?.id}/wallets/${id}`)
            .then((response) => setWallet(response.data.wallet));
        setLoading(false);
    }, [user?.id, id]);

    const navigate = useNavigate();
    const smUp = useMediaQuery("(min-width: 768px");
    const mdUp = useMediaQuery("(min-width:1024px)");
    return (
        <>
            {loading ? (
                <WalletsSkeleton />
            ) : (
                <>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        mb={3}
                    >
                        <Stack spacing={2} direction="row" mb={5}>
                            <ArrowBackIosNew
                                onClick={() => navigate(-1)}
                                sx={{ cursor: "pointer" }}
                            />
                            <Typography variant="h4">
                                {smUp && wallet?.name}
                            </Typography>
                        </Stack>
                        <Stack direction="row" height="40px" spacing={2}>
                            <Button
                                variant="contained"
                                size="small"
                                color="secondary"
                            >
                                Buy
                            </Button>
                            <Button
                                variant="outlined"
                                size="small"
                                color="secondary"
                            >
                                Sell
                            </Button>
                            <Button
                                variant="outlined"
                                size="small"
                                color="secondary"
                            >
                                Swap
                            </Button>
                        </Stack>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h4">
                            {!mdUp && wallet?.address.length > 20
                                ? wallet?.address?.slice(0, 20) + "..."
                                : wallet?.address}
                        </Typography>
                        <Typography variant="h5" color="initial">
                            #0.00
                        </Typography>
                    </Stack>
                    <MainCard>
                        <Grid container>
                            <Grid item md={4} lg={4} sm={6} xs={12}></Grid>
                        </Grid>
                    </MainCard>
                </>
            )}
            {/* <WalletModal
                open={openModal}
                setOpen={setOpenModal}
                setWallets={setWallets}
            /> */}
        </>
    );
};

function WalletsSkeleton() {
    return (
        <Card>
            <CardContent>
                <Grid container direction="column">
                    <Grid item>
                        <Grid container justifyContent="space-between">
                            <Grid item>
                                <Skeleton
                                    variant="rectangular"
                                    width={44}
                                    height={44}
                                />
                            </Grid>
                            <Grid item>
                                <Skeleton
                                    variant="rectangular"
                                    width={34}
                                    height={34}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Skeleton
                            variant="rectangular"
                            sx={{ my: 2 }}
                            height={40}
                        />
                    </Grid>
                    <Grid item>
                        <Skeleton variant="rectangular" height={30} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
