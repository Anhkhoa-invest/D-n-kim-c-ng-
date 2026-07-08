import type { Dividend } from "./Dividend";

export default class DividendRepository {
  private static dividends: Dividend[] = [];

  static getAll() {
    return this.dividends;
  }

  static add(dividend: Dividend) {
    this.dividends.push(dividend);
  }

  static remove(id: string) {
    this.dividends = this.dividends.filter(
      d => d.id !== id
    );
  }

  static find(id: string) {
    return this.dividends.find(
      d => d.id === id
    );
  }
}

