export interface FinancialData {
  symbol: string;

  roe: number;
  roa: number;

  eps: number;

  pe: number;
  pb: number;

  debtToEquity: number;

  revenueGrowth: number;
  profitGrowth: number;

  operatingMargin: number;
  netMargin: number;
}

