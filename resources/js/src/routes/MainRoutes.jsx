import { lazy } from "react";

// project imports
import MainLayout from "../layout/MainLayout";
import Loadable from "../ui-component/Loadable";
import { Wallets } from "../views/pages/wallet";
import { Wallet } from "../views/pages/wallet/Wallet";

// dashboard routing
const DashboardDefault = Loadable(
    lazy(() => import("../views/dashboard/Default"))
);

// utilities routing
const UtilsTypography = Loadable(
    lazy(() => import("../views/utilities/Typography"))
);
const UtilsColor = Loadable(lazy(() => import("../views/utilities/Color")));
const UtilsShadow = Loadable(lazy(() => import("../views/utilities/Shadow")));
const UtilsMaterialIcons = Loadable(
    lazy(() => import("../views/utilities/MaterialIcons"))
);
const UtilsTablerIcons = Loadable(
    lazy(() => import("../views/utilities/TablerIcons"))
);

// sample page routing
const SamplePage = Loadable(lazy(() => import("../views/sample-page")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: "/dashboard",
    element: <MainLayout />,
    children: [
        {
            path: "/dashboard",
            element: <DashboardDefault />,
        },
        {
            path: "/dashboard/wallets",
            element: <Wallets />,
        },
        {
            path: "/dashboard/wallets/:id",
            element: <Wallet />,
        },

        {
            path: "/dashboard/utils",
            children: [
                {
                    path: "util-typography",
                    element: <UtilsTypography />,
                },
            ],
        },
        {
            path: "/dashboard/utils",
            children: [
                {
                    path: "dashboard/util-color",
                    element: <UtilsColor />,
                },
            ],
        },
        {
            path: "/dashboard/utils",
            children: [
                {
                    path: "dashboard/util-shadow",
                    element: <UtilsShadow />,
                },
            ],
        },
        {
            path: "/dashboard/icons",
            children: [
                {
                    path: "dashboard/tabler-icons",
                    element: <UtilsTablerIcons />,
                },
            ],
        },
        {
            path: "/dashboard/icons",
            children: [
                {
                    path: "dashboard/material-icons",
                    element: <UtilsMaterialIcons />,
                },
            ],
        },
        {
            path: "/dashboard/sample-page",
            element: <SamplePage />,
        },
    ],
};

export default MainRoutes;
