import axios from "axios";
import MarketConfig from "../config/MarketConfig";

const HttpClient = axios.create({
  baseURL: MarketConfig.vietnam.baseUrl,
  timeout: MarketConfig.vietnam.timeout,
  headers: {
    "Content-Type": "application/json",
  },
});

export default HttpClient;
