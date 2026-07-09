import FireAntApi from "./FireAntApi";
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
            const data = await FireAntApi.getQuote(symbol);

            return {
                symbol: data.symbol ?? symbol.toUpperCase(),
                price: data.price ?? 0,
                change: data.change ?? 0,
                percentChange: data.percentChange ?? 0,
                updatedAt: new Date(),
            };
        } catch (error) {
            console.error("VietnamMarketProvider Error:", error);
            throw error;
        }
    }
}

export default new VietnamMarketProvider();
