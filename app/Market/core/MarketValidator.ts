import type { MarketData } from "@/app/models/MarketData";

export default class MarketValidator {
  public validate(data: MarketData): void {
    if (!data.symbol.trim()) {
      throw new Error("Market symbol is required");
    }

    if (!data.name.trim()) {
      throw new Error("Market name is required");
    }

    if (data.price < 0) {
      throw new Error("Price cannot be negative");
    }

    if (data.volume < 0) {
      throw new Error("Volume cannot be negative");
    }

    if (data.value < 0) {
      throw new Error("Value cannot be negative");
    }
  }

  public isValid(data: MarketData): boolean {
    try {
      this.validate(data);
      return true;
    } catch {
      return false;
    }
  }
}
