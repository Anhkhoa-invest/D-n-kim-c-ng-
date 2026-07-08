export interface FinancialData {
  code: string;

  roe: number;
  pe: number;
  pb: number;
  eps: number;

  revenueGrowth: number;
  profitGrowth: number;

  debtRatio: number;

  marketCap: number;

  dividend: number;
}
