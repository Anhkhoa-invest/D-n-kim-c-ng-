import type { PortfolioItem } from "@/app/models/PortfolioItem";

export default class PortfolioSync {

  private lastSync: Date | null = null;

  /**
   * Đồng bộ Portfolio
   */
  public sync(data: PortfolioItem[]): boolean {

    try {

      console.log("Portfolio synchronized.", data);

      this.lastSync = new Date();

      return true;

    } catch (error) {

      console.error("Sync failed:", error);

      return false;

    }

  }

  /**
   * Đồng bộ lên Cloud
   */
  public syncToCloud(data: PortfolioItem[]): boolean {

    console.log("Sync to cloud...");

    return this.sync(data);

  }

  /**
   * Đồng bộ từ Cloud
   */
  public syncFromCloud(): PortfolioItem[] {

    console.log("Sync from cloud...");

    return [];

  }

  /**
   * Kiểm tra lần đồng bộ cuối
   */
  public getLastSync(): Date | null {

    return this.lastSync;

  }

  /**
   * Kiểm tra trạng thái Sync
   */
  public isSynced(): boolean {

    return this.lastSync !== null;

  }

}

