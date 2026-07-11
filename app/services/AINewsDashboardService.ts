import AINewsService from "./AINewsService";

export default class AINewsDashboardService {
  static async load() {
    return await AINewsService.getTopNews();
  }
}
