import AINewsDashboardService from "./AINewsDashboardService";

export default class AINewsWidgetService {
  static async loadWidget() {
    return await AINewsDashboardService.load();
  }
}

