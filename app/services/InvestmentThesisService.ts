export default class InvestmentThesisService {

  static generate(
    symbol: string,
    score: number,
    roe: number,
    pe: number,
    debt: number,
    growth: number
  ): string {

    let thesis = `${symbol} đạt AI Score ${score}/100. `;

    if (roe >= 20)
      thesis += "ROE cao, ";

    if (growth >= 20)
      thesis += "tăng trưởng ổn định, ";

    if (pe <= 15)
      thesis += "định giá hấp dẫn, ";

    if (debt <= 40)
      thesis += "nợ thấp, ";

    thesis +=
      "phù hợp để theo dõi cho chiến lược đầu tư dài hạn.";

    return thesis;
  }

}