import type { PortfolioItem } from "@/app/models/PortfolioItem";

export default class PortfolioFactory {

  /**
   * Tạo Portfolio Item
   */
  public create(data: Partial<PortfolioItem>): PortfolioItem {
    return {
      id: data.id ?? crypto.randomUUID(),
      symbol: data.symbol ?? "",
      quantity: data.quantity ?? 0,
      averagePrice: data.averagePrice ?? 0,
      currentPrice: data.currentPrice ?? 0,
    } as PortfolioItem;
  }

  /**
   * Clone Portfolio Item
   */
  public clone(item: PortfolioItem): PortfolioItem {
    return JSON.parse(JSON.stringify(item));
  }

  /**
   * Tạo Portfolio rỗng
   */
  public createEmpty(): PortfolioItem[] {
    return [];
  }

  /**
   * Tạo nhiều Portfolio Item
   */
  public createMany(
    items: Partial<PortfolioItem>[]
  ): PortfolioItem[] {
    return items.map(item => this.create(item));
  }

  /**
   * Reset Portfolio
   */
  public reset(): PortfolioItem[] {
    return [];
  }

}

