import ReactDOM from "react-dom/client";
import "./bootstrap";

import App from "./src/App";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { BrowserRouter } from "react-router-dom";

if (document.getElementById("main")) {
    const Index = ReactDOM.createRoot(document.getElementById("main"));

    Index.render(
        <StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </StrictMode>
    );
}
