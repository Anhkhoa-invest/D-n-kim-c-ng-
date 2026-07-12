import type { MarketData } from "@/app/models/MarketData";

import MarketLoader from "./MarketLoader";
import MarketEngine from "./MarketEngine";

export default class MarketManager {

  private loader = new MarketLoader();
  private engine = new MarketEngine();

  /**
   * Load và xử lý Market
   */
  public load(): MarketData[] {

    const markets = this.loader.load();

    return markets.map(item => this.engine.process(item));

  }

}
