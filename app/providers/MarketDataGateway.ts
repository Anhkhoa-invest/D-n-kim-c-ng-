import VietnamMarketProvider from "./VietnamMarketProvider";

class MarketDataGateway {
  private provider = new VietnamMarketProvider();

  async getQuote(symbol: string) {
    return this.provider.getStockPrice(symbol);
  }

  async getAIContext(symbol: string) {
    const quote = await this.provider.getStockPrice(symbol);

    return {
        symbol,

        currentPrice: quote.price ?? 0,

        pe: quote.pe ?? 0,
        pb: quote.pb ?? 0,
        eps: quote.eps ?? 0,

        roe: quote.roe ?? 0,
        roa: quote.roa ?? 0,

        debtToEquity: quote.debtToEquity ?? 0,
        operatingMargin: quote.operatingMargin ?? 0,

        revenueGrowth: quote.revenueGrowth ?? 0,
        profitGrowth: quote.profitGrowth ?? 0,

        dividendYield: quote.dividendYield ?? 0,

        newsScore: 0,
        sentimentScore: 0,
    };
}

}

export default new MarketDataGateway();
