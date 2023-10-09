import { createRoot } from "react-dom/client";
import "../bootstrap";
import "react-toastify/dist/ReactToastify.css";

// third party
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";

// project imports
import * as serviceWorker from "./serviceWorker";
import App from "./App";

// style + assets
import "./assets/scss/style.scss";
import config from "./config";
import store from "./store";

// ==============================|| REACT DOM RENDER  ||============================== //

const wallets = [new PetraWallet()];

const container = document.getElementById("main");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
window.addEventListener("load", () => {
    root.render(
        <Provider store={store}>
            <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
                <BrowserRouter basename={config.basename}>
                    <App />
                </BrowserRouter>
            </AptosWalletAdapterProvider>
        </Provider>
    );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
