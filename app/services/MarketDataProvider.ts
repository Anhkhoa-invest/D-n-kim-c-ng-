export interface MarketQuote {
    symbol: string;
    price: number;
    change: number;
    percent: number;
    volume: number;
    updatedAt: Date;
}

export default class MarketDataProvider {

    static async getQuote(symbol: string): Promise<MarketQuote> {

        return {
            symbol,
            price: 0,
            change: 0,
            percent: 0,
            volume: 0,
            updatedAt: new Date()
        };

    }

}
