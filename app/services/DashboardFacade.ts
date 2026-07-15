import DashboardSummaryBridge from "./DashboardSummaryBridge";
import DashboardDecisionBridge from "./DashboardDecisionBridge";
import DashboardReportBridge from "./DashboardReportBridge";
import DashboardExplainBridge from "./DashboardExplainBridge";

export default class DashboardFacade {
  static analyze(portfolio: any[]) {
    return {
    summary: DashboardSummaryBridge.analyze(portfolio),

    decision: DashboardDecisionBridge.analyze(portfolio),
};
  }
}

