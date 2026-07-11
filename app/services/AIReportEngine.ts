export interface AIReport {

    title: string;

    content: string;

    score: number;

    recommendation: string;

    confidence: number;

}

export default class AIReportEngine {

    static generate(report: AIReport) {

        return report;

    }

}
