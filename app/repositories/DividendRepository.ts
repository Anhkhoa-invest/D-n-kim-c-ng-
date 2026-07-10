import type { DividendData } from "@/app/models/DividendData";


export default class DividendRepository {

  private readonly database: Record<string, DividendData> = {

    MBB: {
      code: "MBB",
      cashDividend: 6,
      stockDividend: 0,
      exDate: "2026-06-10",
      paymentDate: "2026-06-25",
      frequency: "Yearly",
    },

    HHV: {
      code: "HHV",
      cashDividend: 2,
      stockDividend: 0,
      exDate: "2026-05-20",
      paymentDate: "2026-06-05",
      frequency: "Yearly",
    },

  };

  /**
   * Lấy cổ tức theo mã
   */
  public get(code: string): DividendData | undefined {

    return this.database[code];

  }

  /**
   * Lấy toàn bộ dữ liệu
   */
  public getAll(): DividendData[] {

    return Object.values(this.database);

  }

  /**
   * Kiểm tra mã tồn tại
   */
  public exists(code: string): boolean {

    return code in this.database;

  }

}

