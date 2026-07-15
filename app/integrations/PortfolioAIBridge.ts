import PortfolioService from "@/app/portfolio/portfolio-core/PortfolioService";
export class PortfolioAIBridge {
private readonly portfolio = PortfolioService;
public initialize(): void {
    console.log("PortfolioAIBridge initialized.");
}
public sync(): void {
    this.initialize();

    const portfolios = this.portfolio.getAll();

    console.log("Portfolios:", portfolios);

    console.log("Synchronizing Portfolio -> AI...");
}
}