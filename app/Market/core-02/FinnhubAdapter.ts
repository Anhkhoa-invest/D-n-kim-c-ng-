import { MarketQuote } from "./MarketQuote";

const BASE =
  process.env.FINNHUB_BASE_URL || "https://finnhub.io/api/v1";

const KEY =
  process.env.FINNHUB_API_KEY || "";

export default class FinnhubAdapter {

  async getTicker(symbol: string): Promise<MarketQuote | null> {

    const url =
      `${BASE}/quote?symbol=${symbol}&token=${KEY}`;

    const res = await fetch(url);

    if (!res.ok) {
      return null;
    }

    const q = await res.json();
console.log("Finnhub:", q);

    return {
symbol,
      price: q.c,

      open: q.o,

      high: q.h,

      low: q.l,

      previousClose: q.pc,

      volume: 0,

      change: q.d,

      changePercent: q.dp,

      timestamp: Date.now(),

      updatedAt: new Date(),

      source: "Finnhub"

    };

  }

}

