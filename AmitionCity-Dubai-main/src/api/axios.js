import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: `${import.meta.VITE_APP_URL}/api`,
  baseURL: `${import.meta.env.VITE_APP_URL}/api`,
  withCredentials: true,
});

export default axiosInstance;
