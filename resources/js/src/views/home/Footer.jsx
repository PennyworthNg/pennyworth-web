import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box sx={{ backgroundColor: "#fff", flexGrow: 1, py: 2 }}>
            <Typography variant="body1" align="center" color="#041E42">
                &copy; pennyworth - {new Date().getFullYear()}
            </Typography>
        </Box>
    );
}
