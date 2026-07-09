
import AIFacade from "./AIFacade";

class DashboardAIService {

    getTopAI(symbols: string[]) {
        return symbols.map(symbol => ({
            symbol,
            ai: AIFacade.analyze(symbol)
        }));
    }

}

export default new DashboardAIService();

