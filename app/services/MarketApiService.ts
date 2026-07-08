export class MarketApiService {
  static async getMarket() {
    const res = await fetch("/api/market");

    if (!res.ok) {
      throw new Error("Cannot load market");
    }

    return await res.json();
  }
}
