import axios from "axios";

const api = axios.create({
  baseURL: "https://trade-clone-3.onrender.com", // backend URL
  withCredentials: true,            // important if backend uses cookies
});

export default api;
