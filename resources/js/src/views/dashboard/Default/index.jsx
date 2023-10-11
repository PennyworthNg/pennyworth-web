import { useEffect, useState } from "react";
import axios from "../../../api/axios";
// material-ui
import { Button, Grid, Stack, Typography } from "@mui/material";

// project imports

import PopularCard from "./PopularCard";
import TotalOrderLineChartCard from "./TotalOrderLineChartCard";
import TotalIncomeDarkCard from "./TotalIncomeDarkCard";
import TotalIncomeLightCard from "./TotalIncomeLightCard";
import TotalGrowthBarChart from "./TotalGrowthBarChart";
import { gridSpacing } from "../../../store/constant";
import { NoWalletCard } from "./NoWalletCard";
import { useSelector } from "react-redux";
import { WalletCard } from "../../pages/wallet/WalletCard";

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    const [wallets, setWallets] = useState([]);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        axios
            .get(`/api/user/${user?.id}/wallets`)
            .then((response) => setWallets(response.data.wallets));
        setLoading(false);
    }, [user]);

    return (
        <>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h4">Wallets</Typography>
                        <Button variant="text">View All</Button>
                    </Stack>
                    <Grid container spacing={gridSpacing}>
                        {/* Wallets */}

                        {wallets.length > 0 ? (
                            <>
                                {wallets.map((wallet) => (
                                    <Grid
                                        key={wallet.id}
                                        item
                                        lg={3}
                                        md={3}
                                        sm={6}
                                        xs={12}
                                    >
                                        <WalletCard wallet={wallet} />
                                    </Grid>
                                ))}
                            </>
                        ) : (
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <NoWalletCard
                                    isLoading={isLoading}
                                    setWallets={setWallets}
                                />
                            </Grid>
                        )}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h4">Transactions</Typography>
                        <Button variant="text">View All</Button>
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
};

export default Dashboard;
