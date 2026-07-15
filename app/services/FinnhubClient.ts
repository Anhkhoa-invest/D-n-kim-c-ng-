import ApiClient from "./ApiClient";
import ApiConfig from "./ApiConfig";

export default class FinnhubClient {



    async getQuote(symbol: string): Promise<any> {

    const url =
`${process.env.FINNHUB_BASE_URL}/quote?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`;

       
console.log("FireAnt URL:", url);


        return await ApiClient.get(url);

    }

}
