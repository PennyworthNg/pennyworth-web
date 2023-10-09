import axios from "axios";

let baseURL = "";

if (
    window.location.origin === "http://127.0.0.1:8000" ||
    window.location.origin.includes("127.0.0.1")
) {
    baseURL = window.location.origin;
} else {
    baseURL = "https://pennyworth.ng";
}

// Set the authorization header
const access_token = localStorage.getItem("access_token") || ""; // Replace with your actual token
axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;

export default axios.create({
    baseURL,
});
