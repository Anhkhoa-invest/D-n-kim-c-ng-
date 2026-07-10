export default class DiversificationService {
  static calculate(weights: number[]) {
    if (!weights.length) return 0;

    const hhi = weights.reduce(
      (sum, w) => sum + Math.pow(w / 100, 2),
      0
    );

    const score = Math.max(0, 100 - hhi * 100);

    return Number(score.toFixed(2));
  }
}

