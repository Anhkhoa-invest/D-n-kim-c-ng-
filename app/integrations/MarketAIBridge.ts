import { MarketService } from "@/app/Market/service/MarketService";

export class MarketAIBridge {

    private readonly market = new MarketService();

    public initialize(): void {
        console.log("MarketAIBridge initialized.");
    }

    public sync(): void {
        this.initialize();

        const marketData = this.market.load("market");

        console.log("Market:", marketData);

        console.log("Synchronizing Market -> AI...");
    }
}

