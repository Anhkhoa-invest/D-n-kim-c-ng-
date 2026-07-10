export default interface PortfolioAllocation {

    portfolioId: string;

    totalValue: number;

    cashPercent: number;

    stockPercent: number;

    sectorAllocation: Record<string, number>;

    assetAllocation: Record<string, number>;

}
