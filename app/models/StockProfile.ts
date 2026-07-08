export interface StockProfile {
  // Thông tin cơ bản
  symbol: string;
  name: string;
  exchange: string;
  industry: string;

  // Giá
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;

  // Định giá
  pe: number;
  pb: number;
  eps: number;
  bookValue: number;

  // Tài chính
  roe: number;
  roa: number;
  debtRatio: number;
  revenueGrowth: number;
  profitGrowth: number;

  // Cổ tức
  dividendYield: number;
  dividendPerShare: number;

  // AI
  aiScore: number;
  growthScore: number;
  valueScore: number;
  riskScore: number;

  // Khuyến nghị
  recommendation: "BUY" | "HOLD" | "SELL";
  confidence: number;

  // Thời gian cập nhật
  updatedAt: Date;
}
