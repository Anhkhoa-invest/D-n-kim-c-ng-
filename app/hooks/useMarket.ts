import { useEffect, useState } from "react";
import MarketService from "../services/MarketService";

export function useMarket(symbol: string) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const result = await MarketService.getStockPrice(symbol);
      setData(result);
    }

    load();
  }, [symbol]);

  return data;
}
