import { useEffect, useState } from "react";
import { RealtimeEngine } from "../services/RealtimeEngine";

export interface RealtimeQuote {
  code: string;
  price: number;
  change: number;
  percent: number;
  volume: number;
  updatedAt: string;
}

export function useRealtimeMarket() {
  const [quotes, setQuotes] = useState<RealtimeQuote[]>([]);

  useEffect(() => {
    RealtimeEngine.start((prices: unknown[]) => {
      setQuotes(prices as RealtimeQuote[]);
    });

    return () => {
      RealtimeEngine.stop();
    };
  }, []);

  return quotes;
}

