import type { MarketData } from "@/app/models/MarketData";

export default class MarketCalculator {
  /**
   * Tính toán dữ liệu Market
   */
  public calculate(data: MarketData): MarketData {
    return {
      ...data,
      change: data.price - data.previousClose,
      percentChange:
        data.previousClose === 0
          ? 0
          : ((data.price - data.previousClose) / data.previousClose) * 100,
    };
  }

  /**
   * Chênh lệch giá
   */
  public getChange(data: MarketData): number {
    return data.price - data.previousClose;
  }

  /**
   * % thay đổi
   */
  public getPercentChange(data: MarketData): number {
    if (data.previousClose === 0) return 0;

    return (
      ((data.price - data.previousClose) / data.previousClose) * 100
    );
  }
}
