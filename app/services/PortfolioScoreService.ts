export default class PortfolioScoreService {
  static calculate(items: any[]) {
    if (!items.length) return 0;

    const totalWeight = items.reduce(
      (sum, item) => sum + item.weight,
      0
    );

    const totalScore = items.reduce(
      (sum, item) => sum + item.score * item.weight,
      0
    );

    return Number((totalScore / totalWeight).toFixed(2));
  }
}
