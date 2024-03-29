import { lazy } from "react";

// project imports
import Loadable from "../ui-component/Loadable";
import MinimalLayout from "../layout/MinimalLayout";
import HomePage from "../views/home/Index";
import Verification from "../views/pages/authentication/authentication3/Verification";

// login option 3 routing
const AuthLogin3 = Loadable(
    lazy(() => import("../views/pages/authentication/authentication3/Login3"))
);
const AuthRegister3 = Loadable(
    lazy(() =>
        import("../views/pages/authentication/authentication3/Register3")
    )
);

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: "/",
    element: <MinimalLayout />,
    children: [
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/login",
            element: <AuthLogin3 />,
        },
        {
            path: "/register",
            element: <AuthLogin3 />,
        },
        {
            path: "/verify-email",
            element: <Verification />,
        },
    ],
};

export default AuthenticationRoutes;
