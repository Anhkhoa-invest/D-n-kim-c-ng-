import { FinancialData } from "../models/FinancialData";

export default class FinancialRepository {
  static get(code: string): FinancialData | undefined {
    const database: Record<string, FinancialData> = {
      MBB: {
        code: "MBB",
        roe: 23,
        pe: 7.5,
        pb: 1.4,
        eps: 4200,
        revenueGrowth: 15,
        profitGrowth: 18,
        debtRatio: 28,
        marketCap: 150000,
        dividend: 6,
      },

      HHV: {
        code: "HHV",
        roe: 11,
        pe: 18,
        pb: 1.8,
        eps: 1800,
        revenueGrowth: 8,
        profitGrowth: 7,
        debtRatio: 55,
        marketCap: 12000,
        dividend: 2,
      },
    };

    return database[code];
  }
}
