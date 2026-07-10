import type { PortfolioItem } from "@/app/models/PortfolioItem";
import DatabaseService from "../../database/DatabaseService";

export default class PortfolioStorage {
  private readonly STORAGE_KEY = "kimcuong_portfolio";
  /**
   * Lưu dữ liệu Portfolio
   */
  public save(data: PortfolioItem[]): boolean {

  try {

    localStorage.setItem(
      this.STORAGE_KEY,
      JSON.stringify(data)
    );

    DatabaseService.save("portfolio", {
      items: data,
      updatedAt: new Date().toISOString()
    });

    return true;

  } catch (error) {

    console.error("Portfolio save failed:", error);

    return false;

  }

}


  /**
   * Đọc dữ liệu Portfolio
   */
  public load(): PortfolioItem[] {

  try {

    const database = DatabaseService.all("portfolio");

    if (database.length > 0) {

      return database[0].items as PortfolioItem[];

    }

    const data = localStorage.getItem(this.STORAGE_KEY);

    if (!data) {

      return [];

    }

    return JSON.parse(data) as PortfolioItem[];

  } catch (error) {

    console.error("Portfolio load failed:", error);

    return [];

  }

}



  /**
   * Xóa Portfolio
   */
  public clear(): void {

    localStorage.removeItem(this.STORAGE_KEY);

  }

  /**
   * Kiểm tra dữ liệu tồn tại
   */
  public exists(): boolean {

    return localStorage.getItem(this.STORAGE_KEY) !== null;

  }

  /**
   * Đếm số lượng cổ phiếu
   */
  public count(): number {

    return this.load().length;

  }

  /**
   * Cập nhật Portfolio
   */
  public update(data: PortfolioItem[]): boolean {

    return this.save(data);

  }

  /**
   * Backup dữ liệu dạng JSON
   */
  public backup(): string {

    return JSON.stringify(this.load());

  }

  /**
   * Khôi phục từ Backup
   */
  public restore(json: string): boolean {

    try {

      const data = JSON.parse(json) as PortfolioItem[];

      return this.save(data);

    } catch {

      return false;

    }

  }

}
