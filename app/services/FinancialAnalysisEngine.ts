import FinancialRepository from "./FinancialRepository";

export interface FinancialResult {
    score: number;

    pe: number;
    pb: number;

    roe: number;
    roa: number;

    debt: number;

    growth: number;
}

export default class FinancialAnalysisEngine {

    static async analyze(
        symbol: string
    ): Promise<FinancialResult> {

        const data =
            await FinancialRepository.getFinancialData(symbol);

        let score = 0;

        if (data.roe >= 15) score += 20;
        if (data.roa >= 8) score += 15;
        if (data.pe <= 15) score += 20;
        if (data.pb <= 2) score += 15;
        if (data.debt <= 0.5) score += 15;
        if (data.growth >= 10) score += 15;

        return {
            score,

            pe: data.pe,
            pb: data.pb,

            roe: data.roe,
            roa: data.roa,

            debt: data.debt,

            growth: data.growth,
        };
    }
}
