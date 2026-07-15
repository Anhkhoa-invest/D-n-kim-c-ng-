export interface AIContext {
  symbol: string;
  currentPrice: number;
  pe?: number;
  pb?: number;
  roe?: number;
  debt?: number;
  growth?: number;
  volume?: number;
}
