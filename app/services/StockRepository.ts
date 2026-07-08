import type { StockProfile } from "./StockProfile";

export default class StockRepository {
  static stocks: Record<string, StockProfile> = {
    MBB: {
      symbol: "MBB",
      price: 22.7,
      pe: 8,
      pb: 1.4,
      roe: 95,
      eps: 4200,
      debt: 4,
      growth: 93,
      revenue: 100,
    },

    HHV: {
      symbol: "HHV",
      price: 14.65,
      pe: 12,
      pb: 1.1,
      roe: 82,
      eps: 1800,
      debt: 15,
      growth: 88,
      revenue: 70,
    },

    FPT: {
      symbol: "FPT",
      price: 96,
      pe: 18,
      pb: 3.5,
      roe: 97,
      eps: 6500,
      debt: 5,
      growth: 98,
      revenue: 120,
    },
  };

  static get(symbol: string): StockProfile {
    return this.stocks[symbol];
  }
}

