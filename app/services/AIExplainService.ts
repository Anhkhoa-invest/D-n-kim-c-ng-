export class AIExplainService {
  static explain(score: number) {
    if (score >= 90) {
      return "Doanh nghiệp chất lượng cao, tăng trưởng tốt, định giá hợp lý, rủi ro thấp.";
    }

    if (score >= 75) {
      return "Doanh nghiệp khá tốt nhưng cần theo dõi thêm kết quả kinh doanh và dòng tiền.";
    }

    return "Điểm AI thấp, nên quan sát thêm trước khi đầu tư.";
  }
}
export default AIExplainService;

