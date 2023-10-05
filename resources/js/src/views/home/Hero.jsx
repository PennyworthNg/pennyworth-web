import { Box, Container, Typography } from "@mui/material";

export default function Hero() {
    return (
        <Box
            sx={{
                backgroundImage: "url('assets/bg/homebg.png')",
                height: { md: "90vh", lg: "90vh", sm: "50vh", xs: "30vh" },
                backgroundSize: {
                    md: "contain",
                    lg: "contain",
                    sm: "contain",
                    xs: "contain",
                },
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "right",
                display: "flex",
            }}
        >
            <Box sx={{ mx: "auto", my: "auto" }}>
                <Typography
                    align="center"
                    sx={{
                        background:
                            "linear-gradient(to right, #CFCFCF 0%, #AC72F7 100%)",
                        "-webkit-background-clip": "text",
                        "-webkit-text-fill-color": "transparent",
                        color: "#fff",
                        fontSize: {
                            md: "70px",
                            lg: "70px",
                            sm: "50px",
                            xs: "25px",
                        },
                        fontWeight: "bolder",
                    }}
                >
                    Your Gateway
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
                            md: "70px",
                            lg: "70px",
                            sm: "50px",
                            xs: "30px",
                        },
                        fontWeight: "bolder",
                    }}
                >
                    to Web3
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
        </Box>
    );
}
