import type { PortfolioItem } from "@/app/models/PortfolioItem";

export default class PortfolioBackup {

  /**
   * Tạo Backup
   */
  public create(data: PortfolioItem[]): string {

    return JSON.stringify({
      version: "1.0",
      createdAt: new Date().toISOString(),
      portfolio: data
    });

  }

  /**
   * Khôi phục Backup
   */
  public restore(json: string): PortfolioItem[] {

    try {

      const backup = JSON.parse(json);

      return (backup.portfolio ?? []) as PortfolioItem[];

    } catch (error) {

      console.error("Restore failed:", error);

      return [];

    }

  }

  /**
   * Kiểm tra Backup hợp lệ
   */
  public validate(json: string): boolean {

    try {

      const backup = JSON.parse(json);

      return Array.isArray(backup.portfolio);

    } catch {

      return false;

    }

  }

  /**
   * Lấy thông tin Backup
   */
  public getInfo(json: string): {
    version: string;
    createdAt: string;
    total: number;
  } | null {

    try {

      const backup = JSON.parse(json);

      return {
        version: backup.version,
        createdAt: backup.createdAt,
        total: backup.portfolio?.length ?? 0
      };

    } catch {

      return null;

    }

  }

}

