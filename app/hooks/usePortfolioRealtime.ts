import { useMemo } from "react";
import { useRealtimeMarket } from "./useRealtimeMarket";

export function usePortfolioRealtime(stocks: any[]) {
  const quotes = useRealtimeMarket();

  const portfolio = useMemo(() => {
    return stocks.map((stock: any) => {
      const realtime = quotes.find(q => q.code === stock.code);

      return {
        ...stock,
        currentPrice: realtime?.price ?? stock.buyPrice,
      };
    });
  }, [stocks, quotes]);

  return portfolio;
}

