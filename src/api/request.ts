/*
 * @Description: This is a description
 * @Author: Jin Tang
 * @Date: 2025-01-23 17:16:46
 * @LastEditors: Jin Tang
 * @LastEditTime: 2025-01-24 17:09:03
 */
import axios, { AxiosError, type AxiosInstance, type AxiosResponse } from "axios";
import type { ErrorResponse } from "./types";
import { MessagePlugin } from "tdesign-vue-next";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError<ErrorResponse>) => {
    const response: ErrorResponse | undefined = error.response?.data;
    response && await MessagePlugin.error(response?.message)
    return Promise.reject(error);
  }
);

export default instance;