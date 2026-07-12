export default class CorrelationEngine {
  public calculate(x: number[], y: number[]): number {
    if (x.length !== y.length || x.length === 0) {
      return 0;
    }

    const avgX = x.reduce((a, b) => a + b, 0) / x.length;
    const avgY = y.reduce((a, b) => a + b, 0) / y.length;

    let numerator = 0;
    let dx = 0;
    let dy = 0;

    for (let i = 0; i < x.length; i++) {
      numerator += (x[i] - avgX) * (y[i] - avgY);
      dx += Math.pow(x[i] - avgX, 2);
      dy += Math.pow(y[i] - avgY, 2);
    }

    return dx === 0 || dy === 0 ? 0 : numerator / Math.sqrt(dx * dy);
  }
}

