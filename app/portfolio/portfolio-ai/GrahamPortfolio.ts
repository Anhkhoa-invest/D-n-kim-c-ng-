export default interface GrahamPortfolio {
  intrinsicValue: number;
  marginOfSafety: number;
  fairPrice: number;
  recommendation: "BUY" | "HOLD" | "SELL";
}
