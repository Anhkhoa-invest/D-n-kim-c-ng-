export interface AIContext {
  // Thông tin cổ phiếu
  symbol: string;
  companyName?: string;
  exchange?: string;
  sector?: string;
  industry?: string;

  // Giá
  currentPrice: number;
  previousClose?: number;
  open?: number;
  high?: number;
  low?: number;
  volume?: number;

  // Tài chính
  pe?: number;
  pb?: number;
  eps?: number;
  roe?: number;
  roa?: number;
  debtToEquity?: number;
  

  // Tăng trưởng
  revenueGrowth?: number;
  profitGrowth?: number;

  // Cổ tức
  dividendYield?: number;

  // Tin tức & cảm xúc
  newsScore?: number;
  sentimentScore?: number;

  // Danh mục
  holdingQuantity?: number;
  averagePrice?: number;

  // Mở rộng trong tương lai
  metadata?: Record<string, unknown>;
}
