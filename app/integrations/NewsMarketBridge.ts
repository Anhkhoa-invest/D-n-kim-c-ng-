import { MarketService } from "@/app/Market/service/MarketService";

export class NewsMarketBridge {

    private readonly market = new MarketService();

    public initialize(): void {
        console.log("NewsMarketBridge initialized.");
    }

    public sync(): void {
        this.initialize();

        const marketData = this.market.load("market");

        console.log("News Market:", marketData);

        console.log("News synchronized.");
    }
}

