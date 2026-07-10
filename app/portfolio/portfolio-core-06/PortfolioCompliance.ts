export default interface PortfolioCompliance {
  compliant: boolean;
  violations: string[];
  warnings: string[];
  score: number;
}