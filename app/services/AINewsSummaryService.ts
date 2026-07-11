import { AINewsItem } from "./AINewsEngine";

export default class AINewsSummaryService {
  static summarize(news: AINewsItem): string {
    if (news.summary && news.summary.length > 0) {
      return news.summary;
    }

    return `${news.title} (AI summary will be generated).`;
  }
}
