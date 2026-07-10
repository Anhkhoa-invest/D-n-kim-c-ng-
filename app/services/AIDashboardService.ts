import AIOrchestrator from "./AIOrchestrator";

export default class AIDashboardService {
  static async analyze(symbol: string) {
    const result = await AIOrchestrator.analyze(symbol);

    if ((result as any).error) {
      return result;
    }
const report = result.report!;
const decision = result.decision!;
 
return {
  title: `💎 ${symbol}`,
  score: result.score,
  recommendation: decision.action,

  quality: report.quality,
  risk: report.risk,
  growth: report.growth,
  dividend: report.dividend,

  thesis: decision.thesis,
  reason: decision.reason,

  report,
  decision,
};


  }

    }