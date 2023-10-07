import { useEffect, useState } from "react";
import Web3 from "web3";
// material-ui
import { Grid } from "@mui/material";

// project imports
import EarningCard from "./EarningCard";
import PopularCard from "./PopularCard";
import TotalOrderLineChartCard from "./TotalOrderLineChartCard";
import TotalIncomeDarkCard from "./TotalIncomeDarkCard";
import TotalIncomeLightCard from "./TotalIncomeLightCard";
import TotalGrowthBarChart from "./TotalGrowthBarChart";
import { gridSpacing } from "../../../store/constant";
import { NoWalletCard } from "./NoWalletCard";

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    const [wallets, setWallets] = useState([]);

    const [web3, setWeb3] = useState(null);

    useEffect(() => {
        async function initializeWeb3() {
            if (window.ethereum) {
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);
                try {
                    await window.ethereum.enable();
                } catch (error) {
                    // Handle user denial
                }
            }
        }

        initializeWeb3();
    }, []);

    // Use the web3 instance to interact with Ethereum
    // For example, you can get the user's accounts:
    const getAccounts = async () => {
        if (web3) {
            const accounts = await web3.eth.getAccounts();
            console.log(accounts);
        }
    };

    return (
        <>
            {" "}
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        {/* Wallets */}
                        {wallets.length > 0 ? (
                            <>
                                <Grid item lg={4} md={6} sm={6} xs={12}>
                                    <EarningCard isLoading={isLoading} />
                                </Grid>
                                <Grid item lg={4} md={6} sm={6} xs={12}>
                                    <TotalOrderLineChartCard
                                        isLoading={isLoading}
                                    />
                                </Grid>
                            </>
                        ) : (
                            <Grid item lg={8} md={6} sm={6} xs={12}>
                                <NoWalletCard isLoading={isLoading} />
                            </Grid>
                        )}
                        <Grid item lg={4} md={12} sm={12} xs={12}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    <TotalIncomeDarkCard
                                        isLoading={isLoading}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    <TotalIncomeLightCard
                                        isLoading={isLoading}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={8}>
                            <TotalGrowthBarChart isLoading={isLoading} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <PopularCard isLoading={isLoading} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Dashboard;
