import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3002", // backend URL
  withCredentials: true,            // important if backend uses cookies
});

export default api;
