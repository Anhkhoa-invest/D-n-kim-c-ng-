export interface AIScoreResult {
  total: number;
  financial: number;
  growth: number;
  risk: number;
  valuation: number;
  comment: string;
}

export class AIScorer {
 static calculate(): AIScoreResult {
  const financial = 80;
  const growth = 85;
  const risk = 70;
  const valuation = 90;

  const total = Math.round(
    (financial + growth + risk + valuation) / 4
  );

  return {
    total,
    financial,
    growth,
    risk,
    valuation,
    comment:
      total >= 85
        ? "Cổ phiếu rất hấp dẫn."
        : total >= 75
        ? "Có thể theo dõi đầu tư."
        : "Rủi ro cần quan sát.",
  };
}


}
