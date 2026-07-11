import { AIReport } from "./AIReportEngine";

export default class AIExplainEngine {

    static explain(report: AIReport): string {

        if (report.score >= 90) {
            return "Doanh nghiệp có chất lượng cao, nền tảng tài chính mạnh và định giá hấp dẫn.";
        }

        if (report.score >= 75) {
            return "Doanh nghiệp có nền tảng tốt nhưng cần theo dõi thêm diễn biến thị trường.";
        }

        return "Rủi ro còn cao, cần quan sát thêm trước khi đầu tư.";
    }

}
