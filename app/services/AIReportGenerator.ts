import AIReportEngine, { AIReport } from "./AIReportEngine";

export default class AIReportGenerator {

    static generate(): AIReport {

        return AIReportEngine.generate({

            title: "MBB Investment Report",

            content:
                "Ngân hàng có ROE cao, tăng trưởng ổn định, định giá hấp dẫn.",

            score: 94,

            recommendation: "BUY",

            confidence: 95,

        });

    }

}
