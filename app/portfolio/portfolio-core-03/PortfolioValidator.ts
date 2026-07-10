export default class PortfolioValidator {

    static validateSymbol(symbol: string): boolean {

        return symbol.trim().length > 0;

    }

    static validateQuantity(quantity: number): boolean {

        return quantity > 0;

    }

    static validatePrice(price: number): boolean {

        return price >= 0;

    }

}
