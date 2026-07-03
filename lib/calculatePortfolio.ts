import { PortfolioItem } from "../types/portfolio";
export function calculatePortfolio(portfolio: PortfolioItem[]
) {
  const totalCost = portfolio.reduce(
    (sum, stock) => sum + stock.quantity * stock.buyPrice,
    0
  );

  const totalValue = portfolio.reduce(
    (sum, stock) => sum + stock.quantity * stock.currentPrice,
    0
  );

  const profit = totalValue - totalCost;

  const percent =
    totalCost === 0 ? 0 : (profit / totalCost) * 100;

  return {
    totalCost,
    totalValue,
    profit,
    percent,
  };
}
