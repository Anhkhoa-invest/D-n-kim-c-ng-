import MarketRepository from "../repositories/MarketRepository";

class MarketDataService {
    async getStockPrice(symbol: string) {
        return await MarketRepository.getStockPrice(symbol);
    }

    async getPrices(symbols: string[]) {
        return Promise.all(
            symbols.map(symbol =>
                this.getStockPrice(symbol)
            )
        );
    }
}

export default new MarketDataService();

