// assets
import {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconDashboard,
} from "@tabler/icons";

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconDashboard,
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: "utilities",
    type: "group",
    children: [
        {
            id: "dashboard",
            title: "Dashboard",
            type: "item",
            url: "/dashboard",
            icon: icons.IconDashboard,
            breadcrumbs: false,
        },
        {
            id: "wallets",
            title: "Wallets",
            type: "item",
            url: "/dashboard/wallets",
            icon: icons.IconPalette,
            breadcrumbs: false,
        },
        {
            id: "transactions",
            title: "Transactions",
            type: "item",
            url: "/dashboard/transactions",
            icon: icons.IconShadow,
            breadcrumbs: false,
        },
    ],
};

export default utilities;
