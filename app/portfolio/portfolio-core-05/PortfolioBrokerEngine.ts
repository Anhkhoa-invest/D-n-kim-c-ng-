import PortfolioBroker from "./PortfolioBroker";

export default class PortfolioBrokerEngine {

    static create(): PortfolioBroker {

        return {

            id: crypto.randomUUID(),

            name: "",

            exchange: "",

            commission: 0,

            active: true

        };

    }

}
