import AIFacade from "./AIFacade";

class WatchlistAIService {

    analyze(symbol: string) {
        return AIFacade.analyze(symbol);
    }

}

export default new WatchlistAIService();

