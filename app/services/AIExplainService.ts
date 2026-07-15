import { AIContext } from "../ai/core/AIContext";

export class AIExplainService {
  explain(context: AIContext): string[] {
    const reasons: string[] = [];

    if ((context.roe ?? 0) >= 20)
      reasons.push("ROE cao - doanh nghiệp sử dụng vốn hiệu quả.");

    if ((context.pe ?? 999) <= 12)
      reasons.push("P/E hấp dẫn - cổ phiếu đang được định giá hợp lý.");

    if ((context.profitGrowth ?? 0) >= 15)
      reasons.push("Lợi nhuận tăng trưởng tốt.");

    if ((context.debtToEquity ?? 999) < 1)
      reasons.push("Nợ thấp - cấu trúc tài chính an toàn.");

    if ((context.dividendYield ?? 0) >= 4)
      reasons.push("Cổ tức ổn định.");

    return reasons;
  }
}

