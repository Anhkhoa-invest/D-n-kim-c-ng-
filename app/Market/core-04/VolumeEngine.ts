/**
 * Kim Cương OS
 * Market Core-04
 * Volume Engine
 */

import { BlockTrade } from "./BlockTrade";
import { ForeignTrade } from "./ForeignTrade";
import { Liquidity } from "./Liquidity";
import { MarketDepth } from "./MarketDepth";
import { MoneyFlow } from "./MoneyFlow";
import { NetBuySell } from "./NetBuySell";
import { OrderBook } from "./OrderBook";
import { ProprietaryTrade } from "./ProprietaryTrade";
import { Volume } from "./Volume";

export class VolumeEngine {

  constructor(
    public readonly blockTrade = new BlockTrade(),
    public readonly foreignTrade = new ForeignTrade(),
    public readonly liquidity = new Liquidity(),
    public readonly marketDepth = new MarketDepth(),
    public readonly moneyFlow = new MoneyFlow(),
    public readonly netBuySell = new NetBuySell(),
    public readonly orderBook = new OrderBook(),
    public readonly proprietaryTrade = new ProprietaryTrade(),
    public readonly volume = new Volume()
  ) {}

  clear(): void {
    this.blockTrade.clear();
    this.foreignTrade.clear();
    this.liquidity.clear();
    this.marketDepth.clear();
    this.moneyFlow.clear();
    this.netBuySell.clear();
    this.orderBook.clear();
    this.proprietaryTrade.clear();
    this.volume.clear();
  }

  getSummary() {
    return {
      totalVolume: this.volume.getTotalVolume(),
      totalValue: this.volume.getTotalValue(),
      netMoneyFlow: this.moneyFlow.getNetFlow(),
      foreignNet: this.foreignTrade.getNetValue(),
      proprietaryNet: this.proprietaryTrade.getNetValue(),
      blockTradeValue: this.blockTrade.getTotalValue()
    };
  }
}
