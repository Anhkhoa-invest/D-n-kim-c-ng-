export interface MarginResult {
  margin: number;
  rating: "Excellent" | "Good" | "Fair" | "Poor";
}

export default class MarginOfSafetyEngine {
  static analyze(
    intrinsicValue: number,
    marketPrice: number
  ): MarginResult {
if (intrinsicValue <= 0) {
    return {
        margin: 0,
        rating: "Poor",
    };
}

// Benjamin Graham Margin of Safety
// ((Intrinsic Value - Market Price) / Intrinsic Value) * 100

    const margin =
      ((intrinsicValue - marketPrice) / intrinsicValue) * 100;

    let rating: MarginResult["rating"];

    if (margin >= 40) {
      rating = "Excellent";
    } else if (margin >= 25) {
      rating = "Good";
    } else if (margin >= 10) {
      rating = "Fair";
    } else {
      rating = "Poor";
    }
return {
    margin: Number(margin.toFixed(2)),
    rating,
};

    
  }
}
