import { MarketDataGateway } from "./MarketDataGateway";
export interface PriceData {
  code: string;
  price: number;
  change: number;
  percent: number;
  updatedAt: string;
}
export class RealtimePriceService {
  static async getPrice(code: string): Promise<PriceData> {
    // Sprint 9:
    // tạm trả dữ liệu giả
    // Sprint 10 sẽ thay bằng API thật 
const provider = MarketDataGateway.getProvider();
return await provider.getQuote(code);
  }
}
