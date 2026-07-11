export interface RiskResult {

    riskScore: number;

    level: "LOW" | "MEDIUM" | "HIGH";

    recommendation: string;

    confidence: number;

}
