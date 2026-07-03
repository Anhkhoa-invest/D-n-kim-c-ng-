import { PortfolioItem } from "../types/portfolio";
export const marketData = {
  vnIndex: 1400,

  vn30: 0.82,
  hnx: 0.35,
  upcom: 0.21,
};

export const portfolio: PortfolioItem[] = [
  {
    code: "MBB",
    quantity: 11,
    buyPrice: 19.8,
    currentPrice: 22.7,
  },
  {
    code: "HHV",
    quantity: 19,
    buyPrice: 13.1,
    currentPrice: 14.65,
  },
];

export const top5 = [
  { rank: 1, code: "MBB", score: 94 },
  { rank: 2, code: "HHV", score: 88 },
  { rank: 3, code: "FPT", score: 96 },
  { rank: 4, code: "VCB", score: 92 },
  { rank: 5, code: "ACB", score: 90 },
];
