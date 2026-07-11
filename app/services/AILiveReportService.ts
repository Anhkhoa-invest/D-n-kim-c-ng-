import RealtimeEventBus from "./RealtimeEventBus";

export default class AILiveReportService {

    static start() {
        RealtimeEventBus.subscribe(
            "AI_EXPLANATION_UPDATED",
            this.handleExplanation
        );
    }

    static stop() {
        RealtimeEventBus.unsubscribe(
            "AI_EXPLANATION_UPDATED",
            this.handleExplanation
        );
    }

    private static handleExplanation(payload: any) {

        const report = this.generateReport(payload);

        RealtimeEventBus.emit("AI_REPORT_UPDATED", {
            ...payload,
            report,
            createdAt: new Date().toISOString(),
        });
    }

    private static generateReport(payload: any): string {

        return `
Mã: ${payload.symbol}

Điểm AI: ${payload.score}

Khuyến nghị: ${payload.recommendation}

Giải thích:
${payload.explanation}
`;
    }
}


