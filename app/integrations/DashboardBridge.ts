import { MarketService } from "@/app/Market/service/MarketService";
import PortfolioService from "@/app/portfolio/portfolio-core/PortfolioService";

export class DashboardBridge {

    private readonly market = new MarketService();
    private readonly portfolio = PortfolioService;

    public initialize(): void {
        console.log("DashboardBridge initialized.");
    }

    public sync(): void {
        this.initialize();

        const marketData = this.market.load("market");
        const portfolios = this.portfolio.getAll();

        console.log("Dashboard Market:", marketData);
        console.log("Dashboard Portfolio:", portfolios);

        console.log("Dashboard synchronized.");
    }
}
