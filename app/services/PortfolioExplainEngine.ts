import PortfolioDecisionEngine from "./PortfolioDecisionEngine";

export default class PortfolioExplainEngine {
  static explain(stocks: any[]): string {
    const decision = PortfolioDecisionEngine.decide(stocks);

    switch (decision.action) {
      case "TĂNG TỶ TRỌNG":
        return "Danh mục có chất lượng cao, điểm AI mạnh, có thể cân nhắc tăng tỷ trọng.";

      case "GIỮ DANH MỤC":
        return "Danh mục đang ở trạng thái tốt, nên tiếp tục theo dõi và nắm giữ.";

      default:
        return "Danh mục có dấu hiệu suy giảm chất lượng, nên xem xét cơ cấu lại.";
    }
  }
}
