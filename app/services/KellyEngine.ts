export default class KellyEngine {
  static calculate(
    winRate: number,
    rewardRisk: number
  ) {
    const p = winRate;
    const q = 1 - p;
    const b = rewardRisk;

    const kelly = (b * p - q) / b;

    return {
      fraction: Number(
        Math.max(0, kelly).toFixed(4)
      ),
      percent: Number(
        (Math.max(0, kelly) * 100).toFixed(2)
      ),
    };
  }
}
