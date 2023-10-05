import { Box, Container, Grid, Typography } from "@mui/material";

export default function Sections() {
    return (
        <Box
            sx={{
                backgroundImage: "url('assets/bg/section.png')",
                height: { md: "80vh", lg: "80vh", sm: "50vh", xs: "50vh" },
                backgroundSize: {
                    md: "800px",
                    lg: "800px",
                    sm: "600px",
                    xs: "350px  ",
                },
                backgroundRepeat: "no-repeat",
                /* backgroundPositionX: "center", */
                backgroundPosition: "top",
                display: "flex",
            }}
        >
            <Grid container spacing={3}>
                <Box
                    sx={{
                        mx: "auto",
                        my: "auto",
                    }}
                >
                    <Typography
                        align="center"
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
                        The Heart of the
                    </Typography>

                    <Typography
                        align="center"
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
                        Interchain
                    </Typography>
                    <Typography
                        align="center"
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
        </Box>
    );
}
