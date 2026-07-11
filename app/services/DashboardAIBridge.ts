import AIDashboardService from "./AIDashboardService";

export default class DashboardAIBridge {
  static async get(symbol: string) {
    const data: any = await AIDashboardService.analyze(symbol);


    return {
      symbol,
      title: data.title,
      score: data.score,
      recommendation: data.recommendation,
      quality: data.quality,
      risk: data.risk,
      growth: data.growth,
      dividend: data.dividend,
      thesis: data.thesis,
      reason: data.reason,
      report: data.report,
    };
  }
}

