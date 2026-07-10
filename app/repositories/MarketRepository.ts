import MarketEngine from "../services/MarketEngine";

class MarketRepository {

  /**
   * Lấy giá cổ phiếu
   */
  public async getStockPrice(symbol: string) {

    return await MarketEngine.getStockPrice(symbol);

  }

  /**
   * Lấy nhiều mã cổ phiếu
   */
  public async getStockPrices(symbols: string[]) {

    return Promise.all(

      symbols.map(symbol => this.getStockPrice(symbol))

    );

  }

  /**
   * Kiểm tra MarketEngine hoạt động
   */
  public async ping(): Promise<boolean> {

    try {

      await this.getStockPrices([]);

      return true;

    } catch {

      return false;

    }

  }

}

export default new MarketRepository();
