import axios from "axios";
import ApiConfig from "../config/ApiConfig";

const HttpClient = axios.create({
  baseURL: ApiConfig.vietnam.baseUrl,
  timeout: ApiConfig.vietnam.timeout,
});

export default HttpClient;

