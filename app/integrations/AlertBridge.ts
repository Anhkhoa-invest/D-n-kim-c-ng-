import { MarketService } from "@/app/Market/service/MarketService";
import PortfolioService from "@/app/portfolio/portfolio-core/PortfolioService";

export class AlertBridge {

    private readonly market = new MarketService();
    private readonly portfolio = PortfolioService;

    public initialize(): void {
        console.log("AlertBridge initialized.");
    }

    public sync(): void {
        this.initialize();

        const marketData = this.market.load("market");
        const portfolios = this.portfolio.getAll();

        console.log("Alert Market:", marketData);
        console.log("Alert Portfolio:", portfolios);

        console.log("Alert synchronized.");
    }
}

