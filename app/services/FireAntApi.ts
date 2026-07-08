import { ApiClient } from "./ApiClient";
import ApiConfig from "./ApiConfig";

export class FireAntApi {
  static async getQuote(symbol: string) {
    return ApiClient.get(
      `${ApiConfig.FIREANT_BASE}/fireant/quote?symbol=${symbol}`
    );
  }

  static async getMarket() {
    return ApiClient.get(
      `${ApiConfig.FIREANT_BASE}/fireant/market`
    );
  }
}
