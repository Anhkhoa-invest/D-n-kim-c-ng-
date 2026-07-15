import FireAntApi from "./FireAntApi";
export interface StockPrice {
  symbol: string;
  price: number;
  change: number;
  percentChange: number;
  updatedAt: Date;
  // Financial
pe?: number;
pb?: number;
eps?: number;

roe?: number;
roa?: number;

debtToEquity?: number;
operatingMargin?: number;

revenueGrowth?: number;
profitGrowth?: number;

dividendYield?: number;

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
                pe: data.pe ?? 0,
pb: data.pb ?? 0,
eps: data.eps ?? 0,

roe: data.roe ?? 0,
roa: data.roa ?? 0,

debtToEquity: data.debtToEquity ?? 0,
operatingMargin: data.operatingMargin ?? 0,

revenueGrowth: data.revenueGrowth ?? 0,
profitGrowth: data.profitGrowth ?? 0,

dividendYield: data.dividendYield ?? 0,


            };
        } catch (error) {
            console.error("VietnamMarketProvider Error:", error);
            throw error;
        }
    }
    
}

export default VietnamMarketProvider;




    
    




