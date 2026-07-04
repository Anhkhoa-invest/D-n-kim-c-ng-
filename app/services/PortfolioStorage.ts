import { PortfolioItem } from "../../types/portfolio";

export class PortfolioStorage {
  static load(defaultData: PortfolioItem[]): PortfolioItem[] {
    if (typeof window === "undefined") return defaultData;

    const saved = localStorage.getItem("portfolio");

    return saved ? JSON.parse(saved) : defaultData;
  }

  static save(data: PortfolioItem[]) {
    if (typeof window ==="undefined") return;

    localStorage.setItem("portfolio", JSON.stringify(data));
  }
}

