import PortfolioBenchmark from "./PortfolioBenchmark";

export default class PortfolioBenchmarkEngine {

    static calculate(): PortfolioBenchmark {

        return {

            portfolioReturn: 0,

            vnIndexReturn: 0,

            benchmark: "VNINDEX",

            alpha: 0,

            beta: 0,

            outperform: false

        };

    }

}
