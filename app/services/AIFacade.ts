
import { AIService } from "./AIService";

class AIFacade {

    analyze(symbol: string) {
        return AIService.analyze(symbol);
    }

}

export default new AIFacade();

