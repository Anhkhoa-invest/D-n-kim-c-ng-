import DataSource from "./DataSource";
import MarketAdapter from "./MarketAdapter";
import DefaultMarketAdapter from "./DefaultMarketAdapter";

export default class RealtimeProvider implements DataSource {
    private connected = false;
private readonly adapter: MarketAdapter =
    new DefaultMarketAdapter();
   async connect(): Promise<void> {
    this.connected = true;
    const test = await this.fetchTicker("AAPL");
console.log("Realtime Test:", test);

}
async disconnect(): Promise<void> {
    this.connected = false;
}
    isConnected(): boolean {
        return this.connected;
    }
 async fetchMarket(): Promise<any> {
    return await this.adapter.getMarket();
}
async fetchTicker(symbol: string): Promise<any> {
    return await this.adapter.getTicker(symbol);

}


async fetchIndexes(): Promise<any> {
    return await this.adapter.getIndexes();
}



    subscribe(symbol: string): void {}

    unsubscribe(symbol: string): void {}

    async ping(): Promise<boolean> {
    return this.connected;
}


    getLatency(): number {
        return 0;
    }
}

