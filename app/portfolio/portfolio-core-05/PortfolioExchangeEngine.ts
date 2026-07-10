import PortfolioExchange from "./PortfolioExchange";

export default class PortfolioExchangeEngine {

    static create(): PortfolioExchange {

        return {

            code: "HOSE",

            name: "Ho Chi Minh Stock Exchange",

            country: "Vietnam",

            timezone: "Asia/Ho_Chi_Minh",

            tradingHours: "09:00-15:00",

            active: true

        };

    }

}
