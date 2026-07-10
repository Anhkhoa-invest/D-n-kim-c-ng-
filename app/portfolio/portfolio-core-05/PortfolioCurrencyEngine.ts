import PortfolioCurrency from "./PortfolioCurrency";

export default class PortfolioCurrencyEngine {

    static create(): PortfolioCurrency {

        return {

            baseCurrency: "VND",

            displayCurrency: "VND",

            exchangeRate: 1,

            symbol: "₫",

            locale: "vi-VN"

        };

    }

}
