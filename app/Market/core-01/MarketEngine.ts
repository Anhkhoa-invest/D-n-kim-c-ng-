import type { MarketData } from "@/app/models/MarketData";

import MarketFactory from "./MarketFactory";
import MarketValidator from "../core/MarketValidator";
import MarketCalculator from "../core/MarketCalculator";

export default class MarketEngine {

  private factory = new MarketFactory();
  private validator = new MarketValidator();
  private calculator = new MarketCalculator();

  /**
   * Xử lý dữ liệu Market
   */
  public process(data: Partial<MarketData>): MarketData {

    const market = this.factory.create(data);

    this.validator.validate(market);

    return this.calculator.calculate(market);

  }

}

