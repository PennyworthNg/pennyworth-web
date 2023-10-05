import {
    Box,
    Container,
    Divider,
    Grid,
    Stack,
    Typography,
} from "@mui/material";

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
            <Grid container spacing={3} sx={{ my: "auto" }}>
                <Grid item md={8} lg={8} sm={8} xs={12}>
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
                            Join Over
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
                            1000 People
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
                            who Trust Us
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    md={1}
                    lg={1}
                    sm={1}
                    xs={12}
                    sx={{
                        display: {
                            md: "block",
                            lg: "block",
                            sm: "block",
                            xs: "none",
                        },
                    }}
                >
                    <Divider orientation="vertical" />
                </Grid>
                <Grid
                    item
                    md={3}
                    lg={3}
                    sm={3}
                    xs={12}
                    sx={{ ml: { xs: "150px", sm: 0, md: 0, lg: 0 } }}
                >
                    <Stack
                        spacing={4}
                        direction={{
                            md: "column",
                            lg: "column",
                            sm: "column",
                            xs: "row",
                        }}
                    >
                        <Box>
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
                                Over
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
                                $1M
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
                                Crypto Delivered
                            </Typography>
                        </Box>
                        <Box>
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
                                Over
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
                                1k+
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
                                Users
                            </Typography>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}
