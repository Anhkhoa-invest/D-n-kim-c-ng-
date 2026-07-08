import { usePortfolioRealtime } from "./usePortfolioRealtime";

export function useDashboardRealtime(stocks: any[]) {
  return usePortfolioRealtime(stocks);
}