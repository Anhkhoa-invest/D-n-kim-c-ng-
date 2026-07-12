import type { MarketData } from "@/app/models/MarketData";

export default class MarketSync {

  private lastSync: Date | null = null;

  /**
   * Đồng bộ Market
   */
  public sync(data: MarketData[]): boolean {

    console.log("Market synchronized.", data);

    this.lastSync = new Date();

    return true;

  }

  /**
   * Đồng bộ lên Cloud
   */
  public syncToCloud(data: MarketData[]): boolean {

    return this.sync(data);

  }

  /**
   * Đồng bộ từ Cloud
   */
  public syncFromCloud(): MarketData[] {

    return [];

  }

  /**
   * Lần đồng bộ cuối
   */
  public getLastSync(): Date | null {

    return this.lastSync;

  }

}

