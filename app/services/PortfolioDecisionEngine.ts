import PortfolioReportEngine from "./PortfolioReportEngine";

export interface PortfolioDecision {
  action: string;
  thesis: string;
  confidence: number;
}

export default class PortfolioDecisionEngine {
  static decide(stocks: any[]): PortfolioDecision {
    const report = PortfolioReportEngine.generate(stocks);

    if (report.score >= 90) {
      return {
        action: "TĂNG TỶ TRỌNG",
        thesis: "Danh mục đang có chất lượng rất cao.",
        confidence: 95,
      };
    }

    if (report.score >= 80) {
      return {
        action: "GIỮ DANH MỤC",
        thesis: "Danh mục tốt, tiếp tục theo dõi.",
        confidence: 85,
      };
    }

    return {
      action: "CƠ CẤU DANH MỤC",
      thesis: "Nên xem xét thay thế các cổ phiếu điểm thấp.",
      confidence: 75,
    };
  }
}

