import FinancialRepository from "../repositories/FinancialRepository";

export default class AIScoringService {

  static score(stock: any): number {

    return Math.round(

      stock.financial * 0.35 +
      stock.growth * 0.25 +
      stock.valuation * 0.20 +
      stock.risk * 0.20

    );

  }

  /**
   * Tính điểm từ Repository
   */
  static scoreFromRepository(symbol: string): number {

   const financial = FinancialRepository.get(symbol);

    if (!financial) {

      return 0;

    }

    let score = 50;

    if (financial.roe >= 20) score += 10;

    if (financial.pe <= 10) score += 10;

    if (financial.pb <= 2) score += 10;

    if (financial.profitGrowth >= 15) score += 10;

    if (financial.dividend >= 5) score += 10;

    return Math.min(score, 100);

  }

}
