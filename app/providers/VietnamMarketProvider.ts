export interface StockPrice {
  symbol: string;
  price: number;
  change: number;
  percentChange: number;
  updatedAt: Date;
}

class VietnamMarketProvider {
  async getStockPrice(symbol: string): Promise<StockPrice> {
    try {
      // Tạm thời trả dữ liệu mẫu
      return {
        symbol: symbol.toUpperCase(),
        price: 0,
        change: 0,
        percentChange: 0,
        updatedAt: new Date(),
      };
    } catch (error) {
      console.error("VietnamMarketProvider Error:", error);

      return {
        symbol: symbol.toUpperCase(),
        price: 0,
        change: 0,
        percentChange: 0,
        updatedAt: new Date(),
      };
    }
  }
}

export default new VietnamMarketProvider();
