import BuffettQualityEngine from "./BuffettQualityEngine";
import GrahamValueEngine from "./GrahamValueEngine";
import KellyEngine from "./KellyEngine";
import MarginOfSafetyEngine from "./MarginOfSafetyEngine";
import ThorpEngine from "./ThorpEngine";
import SimonsQuantEngine from "./SimonsQuantEngine";
import DiamondScoreEngine from "./DiamondScoreEngine";


export default class AIFusionEngine {
static analyze(data: any) {

 const buffett =
    BuffettQualityEngine.analyze(data);

const graham =
    GrahamValueEngine.analyze(data);
const margin =
    MarginOfSafetyEngine.analyze(
        data.intrinsicValue,
        data.marketPrice
    );


const kelly =
    KellyEngine.calculate(
        data.winRate,
        data.rewardRisk
    );

const thorp =
    ThorpEngine.analyze({
        winProbability: data.winRate,
        rewardRisk: data.rewardRisk,
    });


const simons =
    SimonsQuantEngine.analyze(data);

const diamond =
    DiamondScoreEngine.calculate(data);

  return {
    status: "Fusion Ready",
    buffett,
    graham,
    kelly,
    margin,
    thorp,
    simons,
    diamond,
  };
}



}
