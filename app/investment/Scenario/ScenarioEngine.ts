import ScenarioService from "./ScenarioService";

export default class ScenarioEngine {

    static analyze() {

        return ScenarioService
            .getAll()
            .map(scenario => ({

                id: scenario.id,

                name: scenario.name,

                probability: scenario.probability,

                expectedReturn: scenario.expectedReturn,

                expectedRisk: scenario.expectedRisk,

                score:

                    scenario.expectedReturn
                    -
                    scenario.expectedRisk

            }));

    }

    static best() {

        return this
            .analyze()
            .sort(
                (a, b) => b.score - a.score
            )[0];

    }

}
