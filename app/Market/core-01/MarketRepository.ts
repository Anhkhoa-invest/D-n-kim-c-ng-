import type { MarketData } from "@/app/models/MarketData";

export default class MarketRepository {

  private markets: MarketData[] = [];

  /**
   * Lưu Market
   */
  public save(data: MarketData): void {

    this.markets.push(data);

  }

  /**
   * Lấy tất cả Market
   */
  public getAll(): MarketData[] {

    return this.markets;

  }

  /**
   * Tìm theo Symbol
   */
  public findBySymbol(symbol: string): MarketData | undefined {

    return this.markets.find(item => item.symbol === symbol);

  }

  /**
   * Xóa toàn bộ
   */
  public clear(): void {

    this.markets = [];

  }

}

