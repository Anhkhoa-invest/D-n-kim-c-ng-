export default class DecisionExplainService {
    

static explain(
    score: number,
    roe: number,
    pe: number,
    debt: number,
    growth: number
): string {

    const reasons: string[] = [];

    if (roe >= 20) reasons.push("ROE cao");
    if (pe <= 15) reasons.push("Định giá hợp lý");
    if (debt <= 40) reasons.push("Nợ thấp");
    if (growth >= 20) reasons.push("Tăng trưởng tốt");

    reasons.push(`Điểm AI ${score}`);

      const summary =
    reasons.length > 0
        ? reasons.join(", ")
        : "Chưa đủ dữ liệu.";

return `${summary}. Điểm AI: ${score}/100.`;

}
}
