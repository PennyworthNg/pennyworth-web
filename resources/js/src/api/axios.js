import axios from "axios";

let baseUrl = "";

if (
    window.location.origin === "http://127.0.0.1:8000" ||
    window.location.origin.includes("127.0.0.1")
) {
    baseUrl = window.location.origin;
} else {
    baseUrl = "https://pennyworth.ng";
}

export default axios.create({
    baseUrl,
});
