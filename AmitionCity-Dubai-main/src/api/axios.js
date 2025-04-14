import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: `${import.meta.VITE_APP_URL}/api`,
  baseURL: `http://localhost:5000/api`,
  withCredentials: true,
});

export default axiosInstance;
