import {
  IMarketDataProvider,
  MarketQuote,
} from "./IMarketDataProvider";

export interface FinancialSnapshot {
  pe: number;
  pb: number;
  roe: number;
  roa: number;
  debt: number;
  growth: number;
  eps: number;
  bvps: number;
  marketCap: number;
  dividendYield: number;
}

export default class FireAntProvider implements IMarketDataProvider {

  async getQuote(symbol: string): Promise<MarketQuote> {

    console.log("Preparing FireAnt API:", symbol);

    const response = await fetch(`/api/market?symbol=${symbol}`);
    const data = await response.json();

    return {
      symbol: data.symbol ?? symbol,
      price: data.price ?? 0,
      change: data.change ?? 0,
      percent: data.percent ?? 0,
      volume: data.volume ?? 0,
      updatedAt: data.updatedAt
        ? new Date(data.updatedAt)
        : new Date(),
    };
  }

  async getFinancial(symbol: string): Promise<FinancialSnapshot> {

    console.log("Preparing FireAnt Financial API:", symbol);

    const response = await fetch(
      `/api/market/financial?symbol=${symbol}`
    );

    const data = await response.json();

    return {
      pe: data.pe ?? 0,
      pb: data.pb ?? 0,
      roe: data.roe ?? 0,
      roa: data.roa ?? 0,
      debt: data.debt ?? 0,
      growth: data.growth ?? 0,
      eps: data.eps ?? 0,
      bvps: data.bvps ?? 0,
      marketCap: data.marketCap ?? 0,
      dividendYield: data.dividendYield ?? 0,
    };
  }

}
