import { Box, Container, Grid, Typography } from "@mui/material";

export default function Sections() {
    return (
        <Box
            sx={{
                backgroundImage: "url('assets/bg/section.png')",
                height: { md: "80vh", lg: "80vh", sm: "50vh", xs: "50vh" },
                backgroundSize: {
                    md: "600px",
                    lg: "600px",
                    sm: "400px",
                    xs: "250px  ",
                },
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "center",
                backgroundPositionY: "center",
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
                            /*  background:
                                "linear-gradient(to right, #CFCFCF 0%, #AC72F7 100%)",
                            "-webkit-background-clip": "text",
                            "-webkit-text-fill-color": "transparent", */
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
                        Buy, Sell and
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
                        Recieve Payments
                    </Typography>
                    <Typography
                        align="center"
                        sx={{
                            /*    background:
                                "linear-gradient(to right, #CFCFCF 0%, #AC72F7 100%)",
                            "-webkit-background-clip": "text",
                            "-webkit-text-fill-color": "transparent", */
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
                        with Ease
                    </Typography>
                </Box>
            </Grid>
        </Box>
    );
}
