import AINewsEngine, { AINewsItem } from "./AINewsEngine";

export default class AINewsService {
  static async getTopNews(): Promise<AINewsItem[]> {
    // TODO:
    // Sau này sẽ lấy từ FireAnt, CafeF, Vietstock...
    const news: AINewsItem[] = [];

    return AINewsEngine.top5(news);
  }
}
