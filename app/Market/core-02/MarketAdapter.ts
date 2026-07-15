export default interface MarketAdapter {
    getMarket(): Promise<any>;

    getTicker(symbol: string): Promise<any>;

    getIndexes(): Promise<any>;
}
