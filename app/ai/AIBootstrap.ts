import { AIRegistry } from "./core/AIRegistry";
import { LegacyEngine } from "./engines/LegacyEngine";
import { InvestmentDecisionEngine } from "./engines/InvestmentDecisionEngine";



export const aiRegistry = new AIRegistry();
aiRegistry.register(new InvestmentDecisionEngine());


aiRegistry.register(new LegacyEngine())


const engine = new InvestmentDecisionEngine();


console.log("===== AI TEST =====");

console.log(
    engine.testScore(
        "FPT",
        95,
        90,
        85,
        92
    )
);