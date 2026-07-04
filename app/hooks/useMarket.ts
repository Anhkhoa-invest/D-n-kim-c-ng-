import { useEffect, useState } from "react";
import MarketService from "../services/MarketService";

export function useMarket(symbol: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const result = await MarketService.getStockPrice(symbol);
      setData(result);
      setLoading(false);
    }

    load();
  }, [symbol]);

  return {
    data,
    loading,
  };
}
