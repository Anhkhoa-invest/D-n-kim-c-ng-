import type { FinancialData } from "../models/FinancialData";

export default class FinancialRepository {

  private static readonly database: Record<string, FinancialData> = {

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

  /**
   * Lấy dữ liệu tài chính
   */
  public static get(code: string): FinancialData | undefined {

    return this.database[code];

  }

  /**
   * Lấy toàn bộ dữ liệu
   */
  public static getAll(): FinancialData[] {

    return Object.values(this.database);

  }

  /**
   * Kiểm tra mã cổ phiếu
   */
  public static exists(code: string): boolean {

    return code in this.database;

  }

}

