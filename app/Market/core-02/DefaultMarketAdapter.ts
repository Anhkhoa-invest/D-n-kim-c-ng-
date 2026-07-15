import MarketAdapter from "./MarketAdapter";
import MarketApiClient from "./MarketApiClient";

import FinnhubAdapter from "./FinnhubAdapter";
import { MarketQuote } from "./MarketQuote";

export default class DefaultMarketAdapter implements MarketAdapter {
    private readonly api = new MarketApiClient("/api/market");
private readonly finnhub = new FinnhubAdapter();


    async getMarket(): Promise<any> {
        return await this.api.get("");
    }

    async getTicker(symbol: string): Promise<MarketQuote | null> {
    return await this.finnhub.getTicker(symbol);
}


    async getIndexes(): Promise<any> {
        return await this.api.get("/indexes");
    }
}
