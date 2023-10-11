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
import { Visibility, WalletOutlined } from "@mui/icons-material";
import axios from "../../../api/axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import WalletModal from "../../dashboard/Default/WalletModal";
import { useNavigate } from "react-router";

// ==============================|| SAMPLE PAGE ||============================== //

export const Wallets = () => {
    const user = useSelector((state) => state.user);
    const [wallets, setWallets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        axios
            .get(`/api/user/${user?.id}/wallets`)
            .then((response) => setWallets(response.data.wallets));
        setLoading(false);
    }, [user]);

    const navigate = useNavigate();
    const smUp = useMediaQuery("(min-width:768px)");
    const xsDown = useMediaQuery("(max-width:400px)");
    return (
        <>
            {loading ? (
                <WalletsSkeleton />
            ) : (
                <>
                    <Stack
                        justifyContent="space-between"
                        direction="row"
                        mb={5}
                    >
                        <Typography variant="h4">Wallets</Typography>
                        {wallets?.length < 4 ? (
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => setOpenModal(true)}
                            >
                                Add Wallet
                            </Button>
                        ) : null}
                    </Stack>
                    <MainCard>
                        {wallets?.length > 0 ? (
                            <List>
                                {wallets.map((wallet, index) => (
                                    <>
                                        <ListItem
                                            onClick={() =>
                                                navigate(`${wallet.id}`)
                                            }
                                            disablePadding
                                            key={index}
                                            secondaryAction={
                                                !xsDown && (
                                                    <Button
                                                        startIcon={
                                                            <Visibility />
                                                        }
                                                        onClick={() =>
                                                            navigate(
                                                                `${wallet.id}`
                                                            )
                                                        }
                                                        variant="contained"
                                                        color="secondary"
                                                    >
                                                        {smUp
                                                            ? "View Wallet"
                                                            : null}
                                                    </Button>
                                                )
                                            }
                                        >
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <WalletOutlined
                                                        sx={{
                                                            fontSize: "50px",
                                                        }}
                                                    />
                                                </ListItemIcon>

                                                <ListItemText
                                                    primary={
                                                        <Tooltip
                                                            title={wallet?.name}
                                                        >
                                                            <Typography
                                                                variant="h3"
                                                                sx={{
                                                                    fontWeight:
                                                                        "bold",
                                                                }}
                                                            >
                                                                {wallet?.name}
                                                            </Typography>
                                                        </Tooltip>
                                                    }
                                                    secondary={
                                                        <Tooltip
                                                            title={
                                                                wallet?.address
                                                            }
                                                        >
                                                            <Typography>
                                                                {wallet?.address
                                                                    .length > 20
                                                                    ? wallet?.address?.slice(
                                                                          0,
                                                                          20
                                                                      ) + "..."
                                                                    : wallet?.address}
                                                            </Typography>
                                                        </Tooltip>
                                                    }
                                                />
                                            </ListItemButton>
                                        </ListItem>
                                        <Divider />
                                    </>
                                ))}
                            </List>
                        ) : (
                            <Typography variant="h5" align="center">
                                You currently dont have any wallet
                            </Typography>
                        )}
                    </MainCard>
                </>
            )}
            <WalletModal
                open={openModal}
                setOpen={setOpenModal}
                setWallets={setWallets}
            />
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
