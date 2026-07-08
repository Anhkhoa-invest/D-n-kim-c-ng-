import { IMarketDataProvider, StockQuote } from "./IMarketDataProvider";
import { ApiClient } from "./ApiClient";
export default class FireAntProvider implements IMarketDataProvider {
  async getQuote(code: string): Promise<StockQuote> {
    // Sprint 12:
    // tạm thời chưa gọi API thật
    // Sprint kế tiếp sẽ thay URL chính thức

    console.log("Preparing FireAnt API:", code);

    return {
      code,
      price: 0,
      change: 0,
      percent: 0,
      volume: 0,
      updatedAt: new Date().toLocaleTimeString(),
    };
  }
}
