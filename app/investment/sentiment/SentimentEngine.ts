import { NewsSentiment } from "./NewsSentiment";
import { SocialSentiment } from "./SocialSentiment";
import { MarketSentiment } from "./MarketSentiment";
import { FearGreedIndex } from "./FearGreedIndex";
import { SentimentScore } from "./SentimentScore";

export class SentimentEngine {

    calculate(stock: any) {

        const news = new NewsSentiment().calculate(stock);
        const social = new SocialSentiment().calculate(stock);
        const market = new MarketSentiment().calculate(stock);
        const fearGreed = new FearGreedIndex().calculate(stock);
        const score = new SentimentScore().calculate(stock);

        return {
            news,
            social,
            market,
            fearGreed,
            score,
        };

    }

}

