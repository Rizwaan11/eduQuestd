// src/features/api/authApi.js
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api/v1";

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.response.use((res) => res.data);

export default api;
