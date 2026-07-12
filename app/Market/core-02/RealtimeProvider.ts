import DataSource from "./DataSource";

export default class RealtimeProvider implements DataSource {
    private connected = false;

   async connect(): Promise<void> {
    this.connected = true;
}

async disconnect(): Promise<void> {
    this.connected = false;
}
    isConnected(): boolean {
        return this.connected;
    }

   async fetchMarket(): Promise<any> {
    return {};
}

async fetchTicker(symbol: string): Promise<any> {
    return {};
}

async fetchIndexes(): Promise<any> {
    return [];
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

