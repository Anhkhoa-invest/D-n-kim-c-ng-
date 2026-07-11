import FundamentalAgent from "./FundamentalAgent";
import TechnicalAgent from "./TechnicalAgent";
import NewsAgent from "./NewsAgent";
import SentimentAgent from "./SentimentAgent";
import RiskAgent from "./RiskAgent";
import DividendAgent from "./DividendAgent";
import ValuationAgent from "./ValuationAgent";
import GrowthAgent from "./GrowthAgent";
import QualityAgent from "./QualityAgent";
import MacroAgent from "./MacroAgent";

export default class AgentRegistry {
  private readonly agents = [
    new FundamentalAgent(),
    new TechnicalAgent(),
    new NewsAgent(),
    new SentimentAgent(),
    new RiskAgent(),
    new DividendAgent(),
    new ValuationAgent(),
    new GrowthAgent(),
    new QualityAgent(),
    new MacroAgent(),
  ];

  getAll() {
    return this.agents;
  }
}
