import { MarketService } from "@/app/Market/service/MarketService";
import PortfolioService from "@/app/portfolio/portfolio-core/PortfolioService";
export class MarketPortfolioBridge {


private readonly market = new MarketService();
private readonly portfolio = PortfolioService;
public initialize(): void {
    console.log("MarketPortfolioBridge initialized.");
}
public sync(): void {
    this.initialize();


    // Lấy dữ liệu thị trường
    const marketData = this.market.load("market");

    // Lấy danh mục đầu tư
    const portfolios = this.portfolio.getAll();

    console.log("Market:", marketData);
    console.log("Portfolios:", portfolios);

    console.log("Synchronizing Market -> Portfolio...");
}

}