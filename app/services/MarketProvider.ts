import FireAntProvider from "./FireAntProvider";

export default class MarketProvider {
    static async getStock(symbol: string) {
        const provider = new FireAntProvider();
        return await provider.getQuote(symbol);
    }
}

