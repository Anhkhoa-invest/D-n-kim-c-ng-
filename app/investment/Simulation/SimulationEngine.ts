import SimulationService from "./SimulationService";

export default class SimulationEngine {

    static run() {

        return SimulationService
            .getAll()
            .map(simulation => ({

                id: simulation.id,

                name: simulation.name,

                strategy: simulation.strategy,

                result:

                    simulation.currentCapital
                    -
                    simulation.initialCapital,

                percent:

                    simulation.initialCapital === 0

                        ? 0

                        :

                        ((simulation.currentCapital
                            -
                            simulation.initialCapital)

                            /

                            simulation.initialCapital)

                        * 100

            }));

    }

}
