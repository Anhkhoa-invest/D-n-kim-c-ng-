export interface AIDecision {

    recommendation:
        | "STRONG_BUY"
        | "BUY"
        | "HOLD"
        | "REDUCE"
        | "SELL";

    confidence: number;

    diamondScore: number;

    risk:
        | "LOW"
        | "MEDIUM"
        | "HIGH";

    reason: string;
}

export default class AIDecisionService {

    static decide(
        score: number,
        confidence: number = 90,
        risk: number = 20
    ): AIDecision {

        let recommendation: AIDecision["recommendation"];

        if (score >= 90) {

            recommendation = "STRONG_BUY";

        } else if (score >= 80) {

            recommendation = "BUY";

        } else if (score >= 65) {

            recommendation = "HOLD";

        } else if (score >= 50) {

            recommendation = "REDUCE";

        } else {

            recommendation = "SELL";

        }

        let riskLevel: AIDecision["risk"];

        if (risk <= 30) {

            riskLevel = "LOW";

        } else if (risk <= 60) {

            riskLevel = "MEDIUM";

        } else {

            riskLevel = "HIGH";

        }

        let reason = "";

        switch (recommendation) {

            case "STRONG_BUY":
                reason =
                    "Diamond Score rất cao, rủi ro thấp, các AI Engine đồng thuận.";
                break;

            case "BUY":
                reason =
                    "Doanh nghiệp tốt, định giá hợp lý và triển vọng tích cực.";
                break;

            case "HOLD":
                reason =
                    "Nên tiếp tục theo dõi, chưa có tín hiệu đủ mạnh để mua thêm.";
                break;

            case "REDUCE":
                reason =
                    "Rủi ro bắt đầu tăng, nên cân nhắc giảm tỷ trọng.";
                break;

            default:
                reason =
                    "Rủi ro cao hoặc chất lượng doanh nghiệp chưa đạt yêu cầu.";
        }

        return {

            recommendation,

            confidence,

            diamondScore: Number(score.toFixed(2)),

            risk: riskLevel,

            reason

        };
    }

}
