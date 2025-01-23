/*
 * @Description: This is a description
 * @Author: Jin Tang
 * @Date: 2025-01-23 17:16:46
 * @LastEditors: Jin Tang
 * @LastEditTime: 2025-01-23 17:21:05
 */
import axios, { type AxiosInstance } from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;