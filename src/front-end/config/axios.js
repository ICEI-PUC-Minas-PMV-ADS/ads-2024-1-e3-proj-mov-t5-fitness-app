import { DATABASE_URL } from "@env";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: DATABASE_URL
})