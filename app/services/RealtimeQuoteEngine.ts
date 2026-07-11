import MarketCacheService from "./MarketCacheService";
import MarketDataGateway from "./MarketDataGateway";

export default class RealtimeQuoteEngine {

    static async getQuote(symbol: string) {

        const cached = MarketCacheService.get(symbol);

        if (cached) {
            return cached;
        }

       
const quote = await MarketDataGateway
    .getProvider()
    .getQuote(symbol);

        MarketCacheService.set(symbol, quote);

        return quote;
    }

}

