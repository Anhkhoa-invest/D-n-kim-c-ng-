
import FireAntProvider from "./FireAntProvider";

export default class FinancialRepository {

    static async getFinancialData(symbol: string) {

        const provider = new FireAntProvider();

        return await provider.getFinancial(symbol);

    }

}
