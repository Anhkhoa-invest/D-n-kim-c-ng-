import { IMarketDataProvider } from "./IMarketDataProvider";
import MockMarketProvider from "./MockMarketProvider";
import FireAntProvider from "./FireAntProvider";
import ApiConfig from "./ApiConfig";

export class MarketDataGateway {

  private static provider: IMarketDataProvider =
    ApiConfig.USE_REAL_API
      ? new FireAntProvider()
      : new MockMarketProvider();

  static getProvider(): IMarketDataProvider {
    return this.provider;
  }

}
