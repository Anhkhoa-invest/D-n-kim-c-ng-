export interface Dividend {
  id: string;
  symbol: string;

  exDate: Date;
  paymentDate: Date;

  amountPerShare: number;

  shares: number;

  totalDividend: number;

  currency: string;

  createdAt: Date;
  updatedAt: Date;

}