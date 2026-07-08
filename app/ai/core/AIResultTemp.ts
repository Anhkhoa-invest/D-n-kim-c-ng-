export interface AIResult {
  score: number;

  recommendation: "BUY" | "HOLD" | "SELL";

  risk: "LOW" | "MEDIUM" | "HIGH";

  targetPrice?: number;

  confidence?: number;

  summary: string;

  reasons?: string[];

  warnings?: string[];

  metadata?: Record<string, unknown>;
}

