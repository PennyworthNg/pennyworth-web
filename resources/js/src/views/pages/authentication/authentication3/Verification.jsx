import { Link } from "react-router-dom";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
    Box,
    Divider,
    Grid,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";

// project imports
import AuthWrapper1 from "../AuthWrapper1";
import AuthCardWrapper from "../AuthCardWrapper";
import AuthLogin from "../auth-forms/AuthLogin";
import Logo from "../../../../ui-component/Logo";
import AuthFooter from "../../../../ui-component/cards/AuthFooter";
import AuthVerify from "../auth-forms/AuthVerify";
import { useSelector } from "react-redux";

// assets

// ================================|| AUTH3 - LOGIN ||================================ //

export default function Verification() {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

    const user = useSelector((state) => state.user);

    return (
        <AuthWrapper1>
            <Grid
                container
                direction="column"
                justifyContent="flex-end"
                sx={{ minHeight: "100vh" }}
            >
                <Grid item xs={12}>
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        sx={{ minHeight: "calc(100vh - 68px)" }}
                    >
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid
                                    container
                                    spacing={2}
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Grid item sx={{ mb: 3 }}>
                                        <Link to="#">
                                            <Box
                                                component="img"
                                                src="assets/logo/logo-full.png"
                                                width="200px"
                                            />
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={
                                                matchDownSM
                                                    ? "column-reverse"
                                                    : "row"
                                            }
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>
                                                <Stack
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    spacing={1}
                                                >
                                                    <Typography
                                                        align="center"
                                                        color={
                                                            theme.palette
                                                                .secondary.main
                                                        }
                                                        gutterBottom
                                                        variant={
                                                            matchDownSM
                                                                ? "h3"
                                                                : "h4"
                                                        }
                                                    >
                                                        Enter Verification Code
                                                        Sent to your Email
                                                    </Typography>
                                                    <Typography
                                                        align="center"
                                                        
                                                        gutterBottom
                                                        variant="body1"
                                                    >
                                                        {user?.email}
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <AuthVerify />
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
}
