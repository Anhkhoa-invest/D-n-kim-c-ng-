import AIAgentRegistry from "./AIAgentRegistry";

import PortfolioAgent from "./PortfolioAgent";
import MarketAgent from "./MarketAgent";
import InvestmentAgent from "./InvestmentAgent";
import RiskAgent from "./RiskAgent";

export default class AIAgentBootstrap {

    static boot() {

        AIAgentRegistry.clear();

        AIAgentRegistry.register(new PortfolioAgent());

        AIAgentRegistry.register(new MarketAgent());

        AIAgentRegistry.register(new InvestmentAgent());

        AIAgentRegistry.register(new RiskAgent());

    }

}
