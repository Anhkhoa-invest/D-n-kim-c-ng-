import type { MarketData } from "@/app/models/MarketData";

export default class MarketStorage {

  /**
   * Lưu Market vào Local Storage
   */
  public save(data: MarketData[]): void {

    localStorage.setItem("market", JSON.stringify(data));

  }

  /**
   * Đọc Market từ Local Storage
   */
  public load(): MarketData[] {

    const data = localStorage.getItem("market");

    if (!data) return [];

    return JSON.parse(data);

  }

  /**
   * Xóa dữ liệu
   */
  public clear(): void {

    localStorage.removeItem("market");

  }

}
