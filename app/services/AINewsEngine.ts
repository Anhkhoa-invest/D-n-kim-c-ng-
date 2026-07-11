export interface AINewsItem {
  title: string;
  summary: string;
  impact: "High" | "Medium" | "Low";
  sentiment: "Positive" | "Neutral" | "Negative";
  symbols: string[];
  publishedAt: string;
}

export default class AINewsEngine {
  static rank(news: AINewsItem[]): AINewsItem[] {
    return [...news].sort((a, b) => {
      const score = (item: AINewsItem) => {
        const impact =
          item.impact === "High"
            ? 3
            : item.impact === "Medium"
            ? 2
            : 1;

        const sentiment =
          item.sentiment === "Positive"
            ? 3
            : item.sentiment === "Neutral"
            ? 2
            : 1;

        return impact * 10 + sentiment;
      };

      return score(b) - score(a);
    });
  }

  static top5(news: AINewsItem[]) {
    return this.rank(news).slice(0, 5);
  }
}

