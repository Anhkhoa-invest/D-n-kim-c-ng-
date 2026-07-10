import type { PortfolioItem } from "@/app/models/PortfolioItem";

export default class PortfolioImporter {

  /**
   * Import từ JSON
   */
  public importFromJson(json: string): PortfolioItem[] {

    try {

      return JSON.parse(json) as PortfolioItem[];

    } catch (error) {

      console.error("Import JSON failed:", error);

      return [];

    }

  }

  /**
   * Import từ Object
   */
  public import(data: PortfolioItem[]): PortfolioItem[] {

    if (!Array.isArray(data)) {

      return [];

    }

    return [...data];

  }

  /**
   * Kiểm tra dữ liệu hợp lệ
   */
  public validate(data: PortfolioItem[]): boolean {

    return Array.isArray(data);

  }

  /**
   * Import an toàn
   */
  public safeImport(json: string): PortfolioItem[] {

    const data = this.importFromJson(json);

    if (!this.validate(data)) {

      return [];

    }

    return data;

  }

}
