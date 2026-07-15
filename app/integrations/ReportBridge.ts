import { MarketService } from "@/app/Market/service/MarketService";
import PortfolioService from "@/app/portfolio/portfolio-core/PortfolioService";

export class ReportBridge {

    private readonly market = new MarketService();
    private readonly portfolio = PortfolioService;

    public initialize(): void {
        console.log("ReportBridge initialized.");
    }

    public sync(): void {
        this.initialize();

        const marketData = this.market.load("market");
        const portfolios = this.portfolio.getAll();

        console.log("Report Market:", marketData);
        console.log("Report Portfolio:", portfolios);

        console.log("Report synchronized.");
    }
}
