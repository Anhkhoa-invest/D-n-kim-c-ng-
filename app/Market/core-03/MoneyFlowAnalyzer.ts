export default class MoneyFlowAnalyzer {
  public analyze(inflow: number, outflow: number) {
    const netFlow = inflow - outflow;

    return {
      inflow,
      outflow,
      netFlow,
      bullish: netFlow > 0,
    };
  }
}

