import axios from "axios";
export default axios.create({
    baseURL: "https://248saqqwv8.execute-api.us-west-1.amazonaws.com/dev",
    headers: {
        "Content-type": "application/json"
    }
});
