import { AIContext } from "./AIContext";

export class AIContextBuilder {
  static create(symbol: string): AIContext {
   return {
  symbol,
  currentPrice: 0,
  metadata: {},
};
  }
}

