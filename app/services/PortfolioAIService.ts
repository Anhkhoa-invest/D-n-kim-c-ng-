import AIFacade from "./AIFacade";

class PortfolioAIService {

    analyzePortfolio(symbols: string[]) {
        return symbols.map(symbol => ({
            symbol,
            ai: AIFacade.analyze(symbol)
        }));
    }

}

export default new PortfolioAIService();
