import { Box, Container, Grid, Typography } from "@mui/material";

export default function About() {
    return (
        <Box
            sx={{
                backgroundImage: "url('assets/bg/Heiix.png')",
                height: { md: "50vh", lg: "45vh", sm: "35vh", xs: "25vh" },
                backgroundSize: {
                    md: "300px",
                    lg: "300px",
                    sm: "200px",
                    xs: "150px  ",
                },
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "left",
                backgroundPositionY: "auto",
                display: "flex",
            }}
        >
            <Grid container spacing={3}>
                <Grid item md={8} lg={8} sm={12} xs={12}>
                    <Box
                        sx={{
                            my: "auto",
                            ml: {
                                md: "250px",
                                lg: "250px",
                                sm: "170px",
                                xs: "150px",
                            },
                        }}
                    >
                        <Typography
                            align="left"
                            sx={{
                                background:
                                    "linear-gradient(to right, #CFCFCF 0%, #AC72F7 100%)",
                                "-webkit-background-clip": "text",
                                "-webkit-text-fill-color": "transparent",
                                color: "#fff",
                                fontSize: {
                                    md: "60px",
                                    lg: "70px",
                                    sm: "50px",
                                    xs: "25px",
                                },
                                fontWeight: "bolder",
                            }}
                        >
                            Enter a Universe
                        </Typography>
                        <Typography
                            align="left"
                            sx={{
                                background:
                                    "linear-gradient(to right, #CFCFCF 0%, #AC72F7 100%)",
                                "-webkit-background-clip": "text",
                                "-webkit-text-fill-color": "transparent",
                                color: "#fff",
                                fontSize: {
                                    md: "60px",
                                    lg: "70px",
                                    sm: "50px",
                                    xs: "30px",
                                },
                                fontWeight: "bolder",
                            }}
                        >
                            of Connected
                        </Typography>
                        <Typography
                            align="left"
                            sx={{
                                background:
                                    "linear-gradient(to right, #CFCFCF 0%, #AC72F7 100%)",
                                "-webkit-background-clip": "text",
                                "-webkit-text-fill-color": "transparent",
                                color: "#fff",
                                fontSize: {
                                    md: "60px",
                                    lg: "70px",
                                    sm: "50px",
                                    xs: "30px",
                                },
                                fontWeight: "bolder",
                            }}
                        >
                            Services
                        </Typography>
                        <Typography
                            align="left"
                            sx={{
                                color: "#fff",
                                fontSize: {
                                    md: "15px",
                                    lg: "15px",
                                    sm: "10px",
                                    xs: "10px",
                                },
                            }}
                        >
                            Buy, Sell and Recieve Payments in Cryptocurrency
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={6} lg={6} sm={12} xs={12}></Grid>
            </Grid>
        </Box>
    );
}
