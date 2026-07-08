export default class AIScoringService {
  static score(stock: any): number {
    return Math.round(
      stock.financial * 0.35 +
      stock.growth * 0.25 +
      stock.valuation * 0.20 +
      stock.risk * 0.20
    );
  }
}
