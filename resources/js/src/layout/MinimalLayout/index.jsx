import { Outlet } from "react-router-dom";

// project imports
import Customization from "../Customization";
import { Box } from "@mui/material";

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => (
    <>
        <Box sx={{ backgroundColor: "#041E42", flexGrow: 1 }}>
            <Outlet />
        </Box>
        <Customization />
    </>
);

export default MinimalLayout;
