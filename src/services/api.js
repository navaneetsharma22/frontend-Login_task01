import axios from "axios";

const configuredApiUrl = (import.meta.env.VITE_API_URL || "").trim();
const isLocalApiUrl = /localhost|127\.0\.0\.1/.test(configuredApiUrl);

const baseURL = import.meta.env.DEV
  ? configuredApiUrl || "http://localhost:5000/api/auth"
  : configuredApiUrl && !isLocalApiUrl
  ? configuredApiUrl
  : "https://backend-login-task01.onrender.com/api/auth";

const API = axios.create({
  baseURL,
});

export default API;