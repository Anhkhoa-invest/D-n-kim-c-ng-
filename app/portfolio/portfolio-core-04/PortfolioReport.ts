export default interface PortfolioReport {

    generatedAt: Date;

    summary: string;

    score: number;

    recommendation: string;

    risks: string[];

    opportunities: string[];

}
