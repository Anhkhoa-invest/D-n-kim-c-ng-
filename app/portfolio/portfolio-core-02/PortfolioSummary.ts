export default interface PortfolioSummary {

    portfolioId: string;

    totalAssets: number;

    totalCost: number;

    totalValue: number;

    totalProfit: number;

    totalProfitPercent: number;

    cash: number;

    holdings: number;

    createdAt: Date;

    updatedAt: Date;

}
