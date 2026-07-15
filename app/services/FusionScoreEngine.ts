/**
 * ============================================
 * KIM CƯƠNG OS
 * FusionScoreEngine
 * Sprint 15
 * --------------------------------------------
 * Hợp nhất điểm số từ các AI Engine
 * (Buffett, Graham, Kelly, Growth,
 * Margin Of Safety, Risk...)
 * ============================================
 */

export default class FusionScoreEngine {
  /**
   * Fusion Score = Average score of all valid AI engines
   */
  static calculate(scores: number[]): number {
    // Không có dữ liệu
    if (!scores || scores.length === 0) {
      return 0;
    }

    // Chỉ giữ các điểm hợp lệ
    const validScores = scores.filter(
      (score) => Number.isFinite(score)
    );

    if (validScores.length === 0) {
      return 0;
    }

    // Tổng điểm
    const total = validScores.reduce(
      (sum, score) => sum + score,
      0
    );

    // Trung bình
    const average = total / validScores.length;

    // Giới hạn 0 -> 100
    const finalScore = Math.max(
      0,
      Math.min(100, average)
    );

    // Làm tròn 2 chữ số
    return Number(finalScore.toFixed(2));
  }
}
