import PortfolioRecommendation from "./PortfolioRecommendation";

export default class PortfolioRecommendationEngine {

    static recommend(): PortfolioRecommendation {

        return {

            action: "HOLD",

            confidence: 0,

            targetPrice: 0,

            reason: []

        };

    }

}


